import React from "react"
import Picker from '../src/components/picker/Picker'
import Image from 'next/image'
import {Box} from "@mui/material";

const Searcher = () => {
  return <>
  <div style={{display:'flex',position:'fixed', width:'100vw',
  height:'55vh',justifyContent:'center',zIndex:'-1',boxSizing:'border-box'}}>
    <Image
    src="/assets/images/diversityHands.jpg"
    alt='diversity hands'
    fill
    priority
    style={{objectFit:'cover',zIndex:'-1'}}
    
    ></Image>
    <Box  sx={{overflow:'hidden',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center','@media screen and (max-width: 600px)':{padding:'0 2rem 5rem 2rem'}}}>
    <h1 style={{color:'white'}}>mit Vorurteilen aufräumen.</h1>
    <Picker></Picker>
    </Box>
    </div>
    </>
    
  
}
export default Searcher
