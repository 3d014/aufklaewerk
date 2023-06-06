import React, { useState } from "react"
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useRouter } from "next/router"
import SideBar from "../side-bar/SideBar"
import "typeface-lato"
import { styles } from "./Header.styles"
import { pages, pathValues } from "@/src/routes"

const Header = () => {
  const router = useRouter()
  const [value, setValue] = useState(getPathValue(router.pathname) ?? false)
  const isMatch = useMediaQuery("(max-width:1100px)")

  function handleTabChange(path: string) {
    router.push(path)
  }

  function getPathValue(route: string): number {
    const pathParts = route.split("/")
    const lastPath = pathParts[pathParts.length - 1]
    return pathValues[lastPath as keyof typeof pathValues]
  }

  return (
    <AppBar sx={{ ...styles.appBarStyle }}>
      <Toolbar>
        <Typography sx={{ ...styles.typographyStyle }}>Aufklarwerk</Typography>
        <>
          {isMatch && <SideBar></SideBar>}
          {!isMatch && (
            <Tabs
              sx={{ ...styles.tabsStyle }}
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {pages.map((page, index) => {
                return (
                  <Tab
                    sx={{ ...styles.tabStyle }}
                    key={index}
                    label={page.text}
                    onClick={() => {
                      handleTabChange(page.path)
                    }}
                  ></Tab>
                )
              })}
            </Tabs>
          )}
        </>
      </Toolbar>
    </AppBar>
  )
}

export default Header
