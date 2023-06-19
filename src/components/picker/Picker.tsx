 import React, { useState } from "react"
 import { Autocomplete, TextField,Slider,Button,Box } from "@mui/material"
 import SearchIcon from '@mui/icons-material/Search';
 import {Styles} from './Picker.styles'
const Picker=()=>{
    const [value,setValue]=useState<string|null>(null)
   return <Box sx={{...Styles.mainBox}}>

    <Autocomplete
     sx={{...Styles.autoComplete}}
    options={['html','css']}
    renderInput={(params)=><TextField {...params} label='Themengebiet wahlen'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Autocomplete
     sx={{...Styles.autoComplete}}
    options={['htmsadfl','css']}
    renderInput={(params)=><TextField {...params} label='Angebotsart wahlen'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Autocomplete
    sx={{...Styles.autoComplete}}
    options={['zvaka','guma']}
    renderInput={(params)=><TextField {...params} label='Ort'></TextField>}
    value={value}
    onChange={(event:any,newValue:string|null)=>setValue(newValue)}
    />

<Slider sx={{...Styles.slider}}></Slider>

<p>0 km</p>

<Button variant="contained" sx={{...Styles.button}}><SearchIcon></SearchIcon>Suchen</Button>
    

   </Box>
}
export default Picker