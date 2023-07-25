import React, { useState } from "react"
import { Autocomplete, TextField, Slider, Button, Box, Grid, Checkbox, Chip } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { classes } from "./Picker.styles"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import { offerings } from "@/src/test-data"
import { Tag } from "@/src/models/offer-dto"


const getThemeOptions=():string[]=>{
  let themeOptions:Tag[]=[]
  offerings.forEach((offer)=>{
    const tags=offer.tags
    tags.forEach((tag)=>{
      const exists=themeOptions.some((existingTag)=>existingTag.label===tag.label)
      if(!exists){
        themeOptions.push(tag)
      }
    })
  })
  let optionsLabel:string[]=themeOptions.map((tag)=>tag.label)
  return optionsLabel
}

const getOfferingTypes=():string[]=>{

  let offeringTypes:Tag[]=[]
  offerings.forEach((offer)=>{
    const types=offer.offeringTypes
    types.forEach((type)=>{
      const exists=offeringTypes.some((existingType)=>existingType.label===type.label)
      if(!exists){
        offeringTypes.push(type)
      }
    })
    
  })
  let optionsLabel:string[]=offeringTypes.map((type)=>type.label)
  return optionsLabel
}

const getCityNames = (): string[] => {
  let cityOptions: string[] = [];

  offerings.forEach((offer) => {
    const cityName = offer.city;
    if (cityName && cityName.trim() !== '') { // Exclude undefined and empty strings
      if (!cityOptions.includes(cityName)) {
        cityOptions.push(cityName);
      }
    }
  });

  return cityOptions;
}


const Picker = () => {

 
  


  const [theme, setTheme] = useState<string[]>([])
  const [offerType, setOfferType] = useState<string[]>([])
  const [location, setLocation] = useState<string[]>([])
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
  const checkedIcon = <CheckBoxIcon fontSize="small" />

  const handleRenderTags = (selectedOptions: any) => {
    const visibleOption = selectedOptions[0]
    const additionalCount = selectedOptions.length - 1

    return (
      <>
        {visibleOption && <Chip label={visibleOption} sx={{ ...classes.chip }} />}
        {additionalCount > 0 && <Chip label={`+${additionalCount}`} color="default" />}
      </>
    )
  }
  return (
    <Grid container sx={{ ...classes.mainBox }} spacing={2}>
      <Grid item xs={12}>
        <Autocomplete
          componentsProps={{ popper: { style: { width: "220px" } } }}
          multiple
          disableCloseOnSelect={true}
          sx={{ ...classes.autoComplete }}
          options={getThemeOptions()}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={classes.checkbox}
                checked={selected}
              />
         
             <span style={classes.optionText}>{option}</span> 
            </li>
          )}
          renderTags={handleRenderTags}
          renderInput={(params) => <TextField  {...params} label="Themengeblet wahlen"></TextField>}
          value={theme}
          onChange={(event: any, newValues: string[]) => setTheme(newValues)}
       
        />
      </Grid>

      <Grid item xs={12}>
        <Autocomplete
         multiple
         disableCloseOnSelect={true}
          sx={{ ...classes.autoComplete }}
          options={getOfferingTypes()}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={classes.checkbox}
                checked={selected}
              />
   
             <span style={classes.optionText}>{option}</span> 
            </li>
          )}
          renderTags={handleRenderTags}
          renderInput={(params) => <TextField {...params} label="Angetbotsart wahlen"></TextField>}
          value={offerType}
          onChange={(event: any, newValues: string[]) => setOfferType(newValues)}
        />
      </Grid>

      <Grid item xs={12}>
        <Autocomplete
         multiple
         disableCloseOnSelect={true}
          sx={{ ...classes.autoComplete }}
          options={getCityNames()}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={classes.checkbox}
                checked={selected}
              />
      
             <span style={classes.optionText}>{option}</span> 
            </li>
          )}
          renderTags={handleRenderTags}
          renderInput={(params) => <TextField {...params} label="Ort"></TextField>}
          value={location}
          onChange={(event: any, newValues: string[]) => setLocation(newValues)}
        />
      </Grid>

      <Grid item xs={12}>
        <Slider sx={{ ...classes.slider }}></Slider>
      </Grid>
      <Grid item xs={12}>
        <p>0km</p>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ ...classes.button }}>
          <SearchIcon></SearchIcon>Search
        </Button>
      </Grid>
    </Grid>
  )
}
export default Picker