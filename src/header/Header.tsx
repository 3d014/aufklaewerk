import React, { useEffect, useState } from 'react'
import {AppBar,Tab,Tabs,Toolbar,Typography, useMediaQuery, useTheme} from '@mui/material'
import Link from 'next/link'
import {useRouter} from 'next/router'
import DrawerComp from '../drawerComp/DrawerComp'
import { pageTitle } from '../siteLayout/SiteLayout'
import 'typeface-lato';

import { styles } from './HeaderStyles'

 enum pathValues{
  aboutUs=0,
  searcher=1,
  offerer,
  contact
}

const Header =({pages}:{pages:pageTitle[]})=>{
    
  
    
    const router=useRouter()
    const [value, setValue] = useState(getPathValue(router.pathname)??false)
    
    const isMatch = useMediaQuery('(max-width:1000px)');
    // useEffect(()=>{setValue(getPathValue(router.pathname)??false)})
    function handleTabChange(path:string){
     
      router.push(path)     
  }
    function getPathValue(route:string):number{
      const pathParts=route.split('/')
      const lastPath=pathParts[pathParts.length-1]
      return pathValues[lastPath as keyof typeof pathValues]
    }
   
    return (
        
       
          <AppBar sx={{...styles.appBarStyle}}>
            <Toolbar>
                <Typography sx={{...styles.typographyStyle}}>Aufklarwerk</Typography>
                
                <>
                {isMatch?
                <DrawerComp pages={pages}></DrawerComp>:
              <Tabs
                sx={{...styles.tabsStyle}}
                TabIndicatorProps={{
                  style: { display: 'none' }
                }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {pages.map((page,index)=>{return <Tab sx={{...styles.tabStyle}} key={index} label={page.text} onClick={()=>{handleTabChange(page.path)}}></Tab>})}
                
              </Tabs>}
              </>

            </Toolbar>
        </AppBar>
        
    )
}

export default Header

