import React, { useState } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {styles} from '../side-bar/SideBar.styles'

const SideBar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>about us</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{
          ...styles.iconButton
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
