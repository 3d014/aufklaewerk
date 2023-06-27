import { Grid, useMediaQuery } from "@mui/material"
import React from "react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import classes from "./Footer.styles"
import Image from "next/image"

interface FooterItem {
  translationKey: string
  routerPath?: string
}

const footerItems: FooterItem[] = [
  {
    translationKey: "copyright",
  },
  {
    translationKey: "dataProtection",
    routerPath: "datasec",
  },
  {
    translationKey: "imprint",
    routerPath: "impressum",
  },
  {
    translationKey: "frequentlyAsked",
    routerPath: "faq",
  },
  {
    translationKey: "contact",
    routerPath: "contact",
  },
]

const Footer = () => {
  const { t } = useTranslation(["footer"])
  const router = useRouter()
  const isMatch = useMediaQuery("(max-width:800px)")

  return (
    <Grid
      container
      direction={isMatch ? "column" : "row"}
      spacing={isMatch ? 1 : 0}
      sx={isMatch ? classes.verticalContainer : classes.horizontalContainer}
      justifyContent="space-between"
      alignItems="center"
    >
      {footerItems.map((item, index) => {
        return (
          <Grid item key={index}>
            <span
              style={item.routerPath != null ? classes.linkLabel : classes.footerLabel}
              onClick={() => item.routerPath != null && router.push(item.routerPath)}
            >
              {t(item.translationKey)}
            </span>
          </Grid>
        )
      })}
      <Grid item>
        <Grid container direction={"row"} justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <a href={"https://www.facebook.com/aufklaerwerk/"}>
              <img src="/assets/images/facebook.png" alt="facebook" style={classes.socialMediaIcon}></img>
            </a>
          </Grid>
          <Grid item>
            <a href={"https://www.instagram.com/aufklaerwerk/"}>
              <img src="/assets/images/instagram.png" alt="instagram" style={classes.socialMediaIcon}></img>
            </a>
          </Grid>
          <Grid item>
            <a href={"https://www.linkedin.com/company/aufklaerwerk/"}>
              <img src="/assets/images/linkedin.png" alt="linkedin" style={classes.socialMediaIcon}></img>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
