import React from "react"
import Picker from "../src/components/picker/Picker";
import Image from "next"

const Searcher = () => {
  return <><div style={{display:'flex',position:'fixed', width:'100vw', height:'50vh',justifyContent:'center',zIndex:'-1'}}>
    <Image
    src="/assets/images/diversityHands.jpg"
    alt='mas'
    fill
    ></Image>
    <Picker></Picker>
    </div></>


}
export default Searcher
