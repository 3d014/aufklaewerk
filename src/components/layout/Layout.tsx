import React, { ReactNode } from "react"
import Header from "./components/header/Header"
import { useMediaQuery } from "@mui/material"
import Footer from "@/src/components/layout/components/footer/Footer"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/src/components/layout/layout.constants"

type SiteLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: SiteLayoutProps) => {
  const isMatch = useMediaQuery("(max-width:800px)")

  return (
    <>
      <Header />
      <div
        style={{ marginTop: "64px", minHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${isMatch ? 0 : FOOTER_HEIGHT}px)` }}
      >
          {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
