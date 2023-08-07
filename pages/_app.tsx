import type { AppProps } from "next/app"
import React from "react"
import Layout from "../src/components/layout/Layout"
import { appWithTranslation } from "next-i18next"
import "../styles/global.css"
import Head from "next/head"

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Aufklärwerk</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
