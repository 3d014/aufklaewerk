 import React, { useState } from "react"
 import { Autocomplete, TextField,Slider,Button } from "@mui/material"
 import SearchIcon from '@mui/icons-material/Search';
 
const Picker=()=>{
    const [value,setValue]=useState<string|null>(null)
   return <div style={{width:'266px',display:'flex',
   justifyContent:'space-evenly',alignItems:'flex-start',
   flexDirection:'column',padding:'1.5rem 1rem 1.5rem 1rem',rowGap:'10px',
   border:'2px black solid',margin:'1rem',
   borderRadius:'10px',
   backgroundColor:'white',
   zIndex:'9999'
   
   }}>

    <Autocomplete
     sx={{width:'100%',fontSize:'1rem'}}
    options={['html','css']}
    renderInput={(params)=><TextField {...params} label='Themengebiet wahlen'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Autocomplete
     sx={{width:'100%'}}
    options={['htmsadfl','css']}
    renderInput={(params)=><TextField {...params} label='Angebotsart wahlen'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Autocomplete
    sx={{width:'100%'}}
    options={['zvaka','guma']}
    renderInput={(params)=><TextField {...params} label='Ort'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Slider sx={{'&.MuiSlider-root':{color:'grey'}}}></Slider>

<p>0 km</p>

<Button variant="contained" sx={{width:'100%',background:'#FF5100'}}><SearchIcon></SearchIcon>Suchen</Button>
    

   </div>
}
export default Picker