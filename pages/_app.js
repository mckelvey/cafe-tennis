import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from '@util/theme'
import GlobalStyles from '@ui/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles bodyColor="vibrantWhite" bodyBackgroundColor="mutedBlack" />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
