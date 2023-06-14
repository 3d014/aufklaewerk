 import React, { useState } from "react"
 import { Autocomplete, TextField,Slider,Button } from "@mui/material"
 import SearchIcon from '@mui/icons-material/Search';
 import {mainStyles,muiComponentStyles} from './Picker.styles'
const Picker=()=>{
    const [value,setValue]=useState<string|null>(null)
   return <div style={{...mainStyles.mainDivStyle}}>

    <Autocomplete
     sx={{...muiComponentStyles.autoComplete}}
    options={['html','css']}
    renderInput={(params)=><TextField {...params} label='Themengebiet wahlen'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Autocomplete
     sx={{...muiComponentStyles.autoComplete}}
    options={['htmsadfl','css']}
    renderInput={(params)=><TextField {...params} label='Angebotsart wahlen'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Autocomplete
    sx={{...muiComponentStyles.autoComplete}}
    options={['zvaka','guma']}
    renderInput={(params)=><TextField {...params} label='Ort'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Slider sx={{...muiComponentStyles.slider}}></Slider>

<p>0 km</p>

<Button variant="contained" sx={{...muiComponentStyles.button}}><SearchIcon></SearchIcon>Suchen</Button>
    

   </div>
}
export default Picker