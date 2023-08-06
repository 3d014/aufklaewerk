import React, { useEffect } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Grid, useMediaQuery } from "@mui/material"
import { ContactForm } from "../src/components/contact-form/ContactForm"
import { classes } from "../styles/Offerer.styles"
import { useTranslation } from "next-i18next"
import { createClient } from "contentful"
import { ContentfulService } from "../src/contentful-service"
import { ContactPage } from "@/src/models/contact-page"
import OffererPage from "@/src/models/offerrer-page"

interface OffererPageProps {
  contactPage: ContactPage
  offererPage: OffererPage
}

const Offerrer = ({ contactPage, offererPage }: OffererPageProps) => {
  const isMatch = useMediaQuery("(max-width:750px)")
  const { t } = useTranslation(["offerer"])

  return (
    <>
      <Grid container sx={classes.upperSectionContainer} direction={isMatch ? "column" : "row"}>
        <Grid item xs={isMatch ? 12 : 5}>
          <img
            src={offererPage.bigPictureLeftUrl}
            alt="fist Bump"
            style={isMatch ? classes.smallerScreen?.fistBumpImg : classes.largerScreen?.fistBumpImg}
          ></img>
        </Grid>
        <Grid item xs={isMatch ? 12 : 7}>
          <section>
            <h1 style={isMatch ? classes.smallerScreen?.upperSectionTitle : classes.largerScreen?.upperSectionTitle}>
              {offererPage.anbieterWerdenHeadline}
            </h1>
            <p style={classes.upperSectionText}>{offererPage.text}</p>
          </section>
          <div>
            <img src={offererPage.imageUrl} alt="offerer path" style={classes.offererPathImg}></img>
          </div>
        </Grid>
      </Grid>

      <div style={isMatch ? classes.smallerScreen?.middleSectionTitle : classes.largerScreen?.middleSectionTitle}>
        {t("middleSectionTitle")}
      </div>

      <div style={classes.contactFormWrapper}>
        <ContactForm page={contactPage}></ContactForm>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  const _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  })

  const service = new ContentfulService(_client)
  const contactPage = await service.getContactPage()
  const offererPage = await service.getOffererPage()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "contact", "offerer"])),
      contactPage,
      offererPage,
    },
  }
}

export default Offerrer
