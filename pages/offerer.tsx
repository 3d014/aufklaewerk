import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Grid, useMediaQuery } from "@mui/material"
import { ContactForm } from "../src/components/contact-form/ContactForm"
import { classes } from "../styles/Offerer.styles"

const Offerrer = () => {
  const isMatch = useMediaQuery("(max-width:750px)")

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
              Du bist Teil einer sozialen Organisation in Deutschland?
            </h1>
            <p style={classes.upperSectionText}>
              Wir helfen Dir dein Angebot für Suchende sichtbarer im Internet zu machen!
            </p>
            <p style={classes.upperSectionText}>
              Teile deine Erfahrungen und unterstütze uns beim Abbau von Vorurteilen & Diskriminierung in Deutschland.
            </p>
          </section>
          <div>
            <img src="/assets/images/offererPath.png" alt="offerer path" style={classes.offererPathImg}></img>
          </div>
        </Grid>
      </Grid>

      <div style={isMatch ? classes.smallerScreen?.middleSectionTitle : classes.largerScreen?.middleSectionTitle}>
        Melde dich bei uns in dem unten stehenden Formular!
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
      ...(await serverSideTranslations(locale, ["common", "footer", "contact"])),
    },
  }
}

export default Offerrer
