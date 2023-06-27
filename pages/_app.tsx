import type { AppProps } from "next/app"
import React from "react"
import Layout from "../src/components/layout/Layout"
import { appWithTranslation } from "next-i18next"
import "../styles/global.css"
import { Suspense } from "react"

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
