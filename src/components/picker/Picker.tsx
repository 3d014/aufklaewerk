import React, { useEffect, useState } from "react"
import { Autocomplete, TextField, Slider, Button, Box, Grid, Checkbox, Chip } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { classes } from "./Picker.styles"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import { offerings } from "@/src/test-data"
import { Tag } from "@/src/models/offer-dto"
import { useRouter } from "next/router"



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
  let cityOptions: string[] = []

  offerings.forEach((offer) => {
    const cityName = offer.city
    if (cityName && cityName.trim() !== '') { // Exclude undefined and empty strings
      if (!cityOptions.includes(cityName)) {
        cityOptions.push(cityName)
      }
    }
  })

  return cityOptions;
}


const Picker = () => {

  const router = useRouter();

  


  const [theme, setTheme] = useState<string[]>([])
  const [offerType, setOfferType] = useState<string[]>([])
  const [location, setLocation] = useState<string[]>([])
 
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
  const checkedIcon = <CheckBoxIcon fontSize="small" />
  const [sliderValue,setSliderValue]=useState<number>(0)

  const handleSearch = (theme: string[], offerType: string[], location: string[]) => {
    const filteredThemes = theme.join()
    const filteredOfferType = offerType.join()
    const filteredLocation = location.join()
  
    const queryParams = `filteredThemes=${encodeURIComponent(filteredThemes)}&filteredOfferType=${encodeURIComponent(filteredOfferType)}&filteredLocation=${encodeURIComponent(filteredLocation)}`;
    router.push(`/searcher?${queryParams}`)
  }
  
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

  const renderCityTag=(selectedOptions:any)=>{
    const  visibleOption=selectedOptions[selectedOptions.length-1]

    return(
      <>
      {visibleOption && <Chip label={visibleOption} sx={{ ...classes.cityChip }} />}
      </>
    )
  }

  const handleCityChange = (event: any, newValue: string[]) => {
 
    setLocation(newValue.length > 0 ? [newValue[newValue.length - 1]] : [])

  
  }
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  }


  useEffect(() => {
    
    const queryParams = new URLSearchParams(router.asPath.split("?")[1])
    const filteredThemes = queryParams.get("filteredThemes")
    const filteredOfferType = queryParams.get("filteredOfferType")
    const filteredLocation = queryParams.get("filteredLocation")

    
    setTheme(filteredThemes ? filteredThemes.split(",") : [])
    setOfferType(filteredOfferType ? filteredOfferType.split(",") : [])
    setLocation(filteredLocation ? filteredLocation.split(",") : [])

    
  }, [router.asPath, setTheme, setOfferType, setLocation])
  return (
    <Grid container sx={{ ...classes.mainBox }} spacing={2}>
      <Grid item xs={12}>
        <Autocomplete
          componentsProps={{ popper: { style: { width: "220px",zIndex:'1',height:'100px' } } }}
          multiple
          ListboxProps={{ style: { maxHeight: '300px' } }}
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
        componentsProps={{ popper: { style: { width: "220px",zIndex:'1',height:'200px' } } }}
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
          ListboxProps={{ style: { maxHeight: '250px' } }}
        />
      </Grid>

      <Grid item xs={12}>
        <Autocomplete
        componentsProps={{ popper: { style: { width: "220px",zIndex:'1',height:'200px' } } }}
        ListboxProps={{ style: { maxHeight: '185px' } }}
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
          renderTags={renderCityTag}
          renderInput={(params) => <TextField {...params} label="Ort"></TextField>}
          value={location}
          onChange={handleCityChange}
        />
      </Grid>

      <Grid item xs={12}>
        <Slider value={sliderValue} onChange={handleSliderChange} sx={{ ...classes.slider }} valueLabelDisplay='auto'></Slider>
      </Grid>
      <Grid item xs={12}>
        <p>{sliderValue} km</p>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ ...classes.button }} onClick={()=>{handleSearch(theme,offerType,location)}}>
          <SearchIcon></SearchIcon>Search
        </Button>
      </Grid>
    </Grid>
  )
}
export default Picker