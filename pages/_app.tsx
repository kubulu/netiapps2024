
import React, { useState, useEffect } from "react";
import type { AppProps } from 'next/app'
import Script from "next/script";
import '../styles/global.scss'
// import { ThemeProvider } from "next-themes";
// import Head from "next/head";
// import Document, { Html, Head, Main, NextScript } from 'next/document'



function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    
    // <ThemeProvider>
      <React.Fragment>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://dunsregistered.dnb.com/mini.js"
                type="text/javascript"></Script>
        <Component {...pageProps} />
      </React.Fragment>
    // </ThemeProvider>
    





  );
}

export default MyApp