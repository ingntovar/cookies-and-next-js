import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { lightTheme } from '../themes/light-theme';
import { themesApp } from '../helpers/index';





function MyApp({ Component, pageProps }: AppProps) {


  const [currentTheme, setCurrentTheme]  = useState<Theme>( lightTheme )

  useEffect(() => {
    const theCookie : string = Cookies.get('theme') || 'light'
    const theTheme : Theme = themesApp[theCookie]

    setCurrentTheme( theTheme )
  }, [ currentTheme ])


  return( 
    <ThemeProvider theme = { currentTheme } >
      <CssBaseline />
        {/* @ts-expect-error */}
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
