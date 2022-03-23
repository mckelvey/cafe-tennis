import { createGlobalStyle } from 'styled-components'

import {
  h1Styles,
  h2Styles,
  h3Styles,
  h4Styles,
  bodyStyles,
} from '@ui/Typography'

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: white;
    color: black;
    font-size: 62.5%; /* base 10 rems */
    min-height: 100vh;
  }

  @font-face {
    font-family: 'Gothic Bitmap';
    src: url("/fonts/gothic-bitmap.woff2") format("woff2"),
         url("/fonts/gothic-bitmap.woff") format("woff"),
         url("/fonts/gothic-bitmap.otf") format("opentype"),
         url("/fonts/gothic-bitmap.ttf") format("truetype");
  }

  * {
    ${bodyStyles}
    box-sizing: border-box;
  }

  h1 { ${h1Styles} }

  h2 { ${h2Styles} }

  h3 { ${h3Styles} }

  h4 { ${h4Styles} }

  p {
    margin: 0;
    ${bodyStyles}
  }

  ul {
    padding-inline-start: 1.1em;
  }

  ol {
    padding-inline-start: 1.25em;
  }

  li {
    ${bodyStyles}
    padding: 5px 0;
    overflow: display;
  }
`

export default GlobalStyles
