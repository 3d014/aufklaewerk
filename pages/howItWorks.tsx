import React, { useEffect, useState } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { Box, Grid, useMediaQuery } from "@mui/material"
import { classes } from "../styles/HowItWorks.styles"
import { createClient } from "contentful"

const HowItWorks = () => {
  const { t } = useTranslation(["howItWorks"])
  const isMatch = useMediaQuery("(max-width:550px)")

  return (
    <Box sx={{ dispaly: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Box sx={isMatch ? classes.smallerScreen.titleContainer : classes.largerScreen.titleContainer}>
        <h1 style={isMatch ? classes.smallerScreen.title : classes.largerScreen.title}>{t("title")}</h1>
        <p style={isMatch ? classes.smallerScreen.subTitle : classes.largerScreen.subTitle}>{t("subTitle")}</p>
      </Box>
      <img src="/assets/images/howItWorksCycle.png" style={classes.howItWorksCycle}></img>

      <Box sx={classes.sixStepsWrapper}>
        <Box sx={classes.sixStepsOuterBox}>
          <p style={classes.sixStepsTitle}>{t("sixStepsTitle")}</p>
          <Grid container spacing={2} sx={classes.sixStepsInnerBox}>
            <Grid item xs={12} md={6}>
              {t("step1")}
            </Grid>
            <Grid item xs={12} md={6}>
              {t("step2")}
            </Grid>
            <Grid item xs={12} md={6}>
              {t("step3")}
            </Grid>
            <Grid item xs={12} md={6}>
              {t("step4")}
            </Grid>
            <Grid item xs={12} md={6}>
              {t("step5")}{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              {t("step6")}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={classes.endingQuestionBox}>
        <p>{t("question")}</p>
        <div>
          {t("preLinkText")}{" "}
          <Link href="/contact" style={classes.endingQuestionLinkWord}>
            {t("linkWord")}
          </Link>
        </div>
      </Box>
    </Box>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "howItWorks"])),
    },
  }
}

export default HowItWorks
