import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Grid } from "@mui/material"
import { useTranslation } from "next-i18next"

const classes = {
  content: {
    backgroundColor: "#FFFBF5",
    width: "650px",
    minHeight: "100vh",
  },
  description: {
    padding: "10px",
    paddingTop: 0,
    marginTop: 0,
  },
  enactusLink: {
    fontWeight: "bolder",
    color: "#004c45",
    marginLeft: 3,
  },
}

const Datasec = () => {
  const { t } = useTranslation(["datasec"])

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={classes.content}>
        <h1>{t("title")}</h1>
        <p style={classes.description}>
          {t("description")}
          <a href={"https://www.enactus.de/datenschutzerklrung"}>
            <span style={classes.enactusLink}>{t("enactusLinkLabel")}</span>
          </a>
        </p>
      </Grid>
    </Grid>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "datasec"])),
    },
  }
}

export default Datasec
