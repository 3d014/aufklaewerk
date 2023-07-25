import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Grid, useMediaQuery } from "@mui/material"
import { ContactForm } from "../src/components/contact-form/ContactForm"
import { classes } from "../styles/Offerer.styles"
import { useTranslation } from "next-i18next"

const Offerrer = () => {
  const isMatch = useMediaQuery("(max-width:750px)")
  const { t } = useTranslation(["offerer"])
  
  return (
    <>
      <Grid container sx={classes.upperSectionContainer} direction={isMatch ? "column" : "row"}>
        <Grid item xs={isMatch ? 12 : 5}>
          <img
            src="/assets/images/fistBump.jpg"
            alt="fist Bump"
            style={isMatch ? classes.smallerScreen?.fistBumpImg : classes.largerScreen?.fistBumpImg}
          ></img>
        </Grid>
        <Grid item xs={isMatch ? 12 : 7}>
          <section>
            <h1 style={isMatch ? classes.smallerScreen?.upperSectionTitle : classes.largerScreen?.upperSectionTitle}>
             {t("upperSectionTitle")}
            </h1>
            <p style={classes.upperSectionText}>
            {t("upperSectionText1")}
            </p>
            <p style={classes.upperSectionText}>
            {t("upperSectionText2")}
            </p>
          </section>
          <div>
            <img src="/assets/images/offererPath.png" alt="offerer path" style={classes.offererPathImg}></img>
          </div>
        </Grid>
      </Grid>

      <div style={isMatch ? classes.smallerScreen?.middleSectionTitle : classes.largerScreen?.middleSectionTitle}>
      {t("middleSectionTitle")}
      </div>

      <div style={classes.contactFormWrapper}>
        <ContactForm></ContactForm>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "contact","offerer"])),
    },
  }
}

export default Offerrer
