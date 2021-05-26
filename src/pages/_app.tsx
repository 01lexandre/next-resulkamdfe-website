import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function StartDownload() {
  console.log('click download app')
}
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} startDownload={StartDownload} />
        <GlobalStyle />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp
