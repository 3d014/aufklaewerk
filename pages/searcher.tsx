import React from "react"
import Picker from "../src/components/picker/Picker"
import Image from "next/image"
import { Box, Grid } from "@mui/material"

const Searcher = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "100vw",
          justifyContent: "center",
          
          boxSizing: "border-box",
        }}
      >
        <Image
          src="/assets/images/diversityHands.jpg"
          alt="diversity hands"
          fill
          priority
          style={{ objectFit: "cover", zIndex: "-1" }}
        ></Image>
        <Grid
          container
          spacing={1}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px",}}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              fontSize: "40px",
              justifyContent: "center",
              alignItems: "center",
              "@media screen and (max-width:400px)": { fontSize: "30px" },
            }}
          >
            <h3 style={{ color: "white", textAlign: "center" }}>mit Vorurteilen aufräumen.</h3>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Picker></Picker>
          </Grid>
        </Grid>
      </Box>

      
    </>
  )
}
export default Searcher
