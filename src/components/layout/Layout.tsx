import React, { ReactNode } from "react"
import Header from "../header/Header"
import { CssBaseline } from "@mui/material"

type SiteLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <Header></Header>
      <div style={{ marginTop: "70px" }}>{children}</div>
    </>
  )
}

export default Layout
