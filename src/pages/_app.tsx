import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import LayoutWrapper from '@/components/LayoutWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Expense tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}
