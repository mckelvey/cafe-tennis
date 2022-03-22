const theme = {
  bp: {
    sm: style => `@media only screen and (min-width: 414px) { ${style} }`,
    md: style => `@media only screen and (min-width: 768px) { ${style} }`,
    lg: style => `@media only screen and (min-width: 1024px) { ${style} }`,
    xl: style => `@media only screen and (min-width: 1280px) { ${style} }`,
    xxl: style => `@media only screen and (min-width: 1560px) { ${style} }`,
  },

  colors: {
    black: '#000000',
    white: '#ffffff',
  },

  fontStacks: {
    workSans: 'Work Sans, sans-serif',
  },
}

export const COLOR_NAMES = Object.keys(theme.colors)

export default theme
