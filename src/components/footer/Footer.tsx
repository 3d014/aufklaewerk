import {Grid} from "@mui/material";
import React from 'react'
import {useTranslation} from "next-i18next";

const footerItems = [
  {
    translationPath: "copyright",
  },
  {
    translationPath: "dataProtection",
  },
  {
    translationPath: "imprint",
  },
  {
    translationPath: "frequentlyAsked",
  },
  {
    translationPath: "contact",
  },
]


const Footer = () => {
  const { t } = useTranslation(['common'])

  return (
    <Grid container sx={{ backgroundColor: "#ECE9E4", width: "100%" , height: "90px", color:"#004c45"}} justifyContent="space-around"
          alignItems="center">
      {footerItems.map((item, index) => {
        return (
          <Grid item key={index} >
            <strong>{t(item.translationPath)}</strong>
          </Grid>
        )
      })}
      <Grid item >
        Icons
      </Grid>
    </Grid>
  )
}

export default Footer
