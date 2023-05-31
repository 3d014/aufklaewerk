import React, { useState } from "react";
import { Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { pageTitle } from "../siteLayout/SiteLayout";

const DrawerComp=({pages}:{pages:pageTitle[]})=>{
const [openDrawer,setOpenDrawer]=useState<boolean>(false)

return <>


<Drawer open={openDrawer}
onClose={()=>setOpenDrawer(false)}>
    <List><ListItemButton>
        <ListItemIcon>
            <ListItemText>about us</ListItemText>
        </ListItemIcon>
        </ListItemButton></List>
</Drawer>
<IconButton sx={{color:'#ff5100',marginLeft:'auto'}} onClick={()=>{setOpenDrawer(!openDrawer)}}>
<MenuIcon/>

</IconButton>
</>
}
export default DrawerComp