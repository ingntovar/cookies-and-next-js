import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from '../themes/dark-theme';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <ThemeProvider theme = { darkTheme } >
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default MyApp
