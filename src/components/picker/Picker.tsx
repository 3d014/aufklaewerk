import React, { useState } from "react"
import { Autocomplete, TextField, Slider, Button, Box, Grid } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { Styles } from "./Picker.styles"
const Picker = () => {
  const [value, setValue] = useState<string | null>(null)
  return (
    <Grid container sx={{ ...Styles.mainBox }}>
      <Grid item xs={12}>
        <Autocomplete
          sx={{ ...Styles.autoComplete }}
          options={["zvaka", "guma"]}
          renderInput={(params) => <TextField {...params} label="Themengeblet wahlen"></TextField>}
          value={value}
          onChange={(event: any, newValue: string | null) => setValue(newValue)}
        />
      </Grid>

      <Grid item xs={12}>
        <Autocomplete
          sx={{ ...Styles.autoComplete }}
          options={["zvaka", "guma"]}
          renderInput={(params) => <TextField {...params} label="Angetbotsart wahlen"></TextField>}
          value={value}
          onChange={(event: any, newValue: string | null) => setValue(newValue)}
        />
      </Grid>

      <Grid item xs={12}>
        <Autocomplete
          sx={{ ...Styles.autoComplete }}
          options={["zvaka", "guma"]}
          renderInput={(params) => <TextField {...params} label="Ort"></TextField>}
          value={value}
          onChange={(event: any, newValue: string | null) => setValue(newValue)}
        />
      </Grid>

      <Grid item xs={12}>
        <Slider sx={{ ...Styles.slider }}></Slider>
      </Grid>
      <Grid item xs={12}>
        <p>0km</p>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ ...Styles.button }}>
          <SearchIcon></SearchIcon>Search
        </Button>
      </Grid>
    </Grid>
  )
}
export default Picker
