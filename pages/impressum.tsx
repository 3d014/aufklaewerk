import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Grid } from "@mui/material"
import { ENACTUS_ADRESS, ENACTUS_GERMANY_INFO } from "../src/constant-strings"

const classes = {
  content: {
    backgroundColor: "#FFFBF5",
    width: "750px",
    minHeight: "100vh",
  },
  addressDescription: {
    padding: "10px",
    paddingTop: 0,
    marginTop: 0,
    whiteSpace: "pre-line",
    lineHeight: 1.4,
  },
  description: {
    padding: "10px",
    paddingTop: 0,
    marginTop: 0,
    whiteSpace: "pre-line",
  },
  addressSubtitle: {
    fontSize: "2rem",
    marginBottom: 0,
  },
}

const Impressum = () => {
  const { t } = useTranslation(["impressum"])

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={classes.content}>
        <h1 style={{ marginBottom: 0 }}>{t("title")}</h1>
        <span style={classes.addressSubtitle}>{t("addressSubtitle")}</span>
        <p style={classes.addressDescription}>{ENACTUS_ADRESS}</p>
        <span style={classes.addressSubtitle}>{t("enactusSubtitle")}</span>
        <p style={classes.addressDescription}>{ENACTUS_GERMANY_INFO}</p>
      </Grid>
    </Grid>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "impressum"])),
    },
  }
}

export default Impressum
