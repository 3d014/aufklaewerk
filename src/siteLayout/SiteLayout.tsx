import React, { ReactNode } from "react"
import DrawerComp from "../drawerComp/DrawerComp"
import Header from "../header/Header"

type SiteLayoutProps = {
    children: ReactNode
  }
  

export interface pageTitle{
    text:string,
    path:string

}
let pages:pageTitle[]=[{text:'Uber uns',path:'/aboutUs'},
{text:'Wie Funktioniert',path:'/searcher'},
{text:'Anbieter Werden',path:'/offerer'},
{text:'Kontakt',path:'/contact'}
]

const SiteLayout=({children}:SiteLayoutProps)=>{
    return <>


        <Header pages={pages}></Header>
        <div style={{marginTop:'70px'}}>
        {children}
    </div>
    </>
}

export default SiteLayout