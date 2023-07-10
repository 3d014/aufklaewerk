import React, { useState, useEffect } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { styles } from "../side-bar/SideBar.styles"
import Link from "next/link"

import { pages } from "@/src/routes"

const SideBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  

  const handleLinkClick = () => {
    setOpenDrawer(false)
  }

 

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <Link href={page.path} passHref key={index}>
              <ListItemButton  onClick={handleLinkClick}>
                <ListItemIcon>
                  <ListItemText>{page.text}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          ...styles.iconButton,
        }}
        onClick={() => {
          setOpenDrawer(!openDrawer)
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default SideBar