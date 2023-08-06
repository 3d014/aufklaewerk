import { Grid, useMediaQuery } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import React from "react"

const LocationItem: React.FC = () => {
  const isMatch = useMediaQuery("(max-width:1050px)")

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        marginTop: isMatch ? "5px" : "0px",
      }}
    >
      <LocationOnIcon sx={{ color: "#FF5100" }} />
      <div
        style={{
          display: "flex",
          alignItems: "left",
          flexWrap: "nowrap",
          flexDirection: "column",
          marginTop: isMatch ? "5px" : "0px",
        }}
      >
        <div
          style={{
            marginBottom: "5px",
          }}
        >
          <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org street</span>
          <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org house name</span>
        </div>
        <div>
          <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org post code</span>
          <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org city</span>
        </div>
      </div>
    </div>
  )
}

export default LocationItem
