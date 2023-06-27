import React, { ReactNode } from "react"
import Header from "../header/Header"
import { CssBaseline } from "@mui/material"
import Footer from "@/src/components/footer/Footer";

type SiteLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <Header/>
        <div style={{ marginTop: "64px" }}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
