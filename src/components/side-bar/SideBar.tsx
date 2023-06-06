import React, { useState } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

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
sx={{ color: "#ff5100", marginLeft: "auto","&.MuiButtonBase-root:hover": {
bgcolor: "transparent"
},
"&.MuiButtonBase-root:focus":{
bgcolor:'transparent'
} ,
"&.MuiButtonBase-root:active":{
bgcolor:'transparent'
}}}
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
