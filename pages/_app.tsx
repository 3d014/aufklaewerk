import type { AppProps } from "next/app"
import React from "react"
import SiteLayout from '../src/siteLayout/SiteLayout'

export default function App({ Component, pageProps }: AppProps) {
  return <SiteLayout><Component {...pageProps} /></SiteLayout>
}
