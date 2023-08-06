import React from "react"
import { ContactForm } from "../src/components/contact-form/ContactForm"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Box, useMediaQuery } from "@mui/material"
import { createClient } from "contentful"
import { ContentfulService } from "../src/contentful-service"
import { ContactPage } from "../src/models/contact-page"

const classes = {
  smallerScreen: {
    mainContainer: { background: "rgb(0 76 69 / 90%)", padding: "5% 20% 5% 20%", boxSizing: "border-box" },
  },
  largerScreen: {
    mainContainer: {
      background: "rgb(0 76 69 / 90%)",
      padding: "3% 20% 5% 20%",
      boxSizing: "border-box",
    },
  },
}

interface ContactProps {
  page: ContactPage
}

const Contact = ({ page }: ContactProps) => {
  const isMatch = useMediaQuery("(max-width:640px)")
  return (
    <Box sx={isMatch ? classes.smallerScreen.mainContainer : classes.largerScreen.mainContainer}>
      <Box sx={{ position: "relative", background: "white", padding: "3rem 1rem 1rem 1rem", minHeight: "100vh" }}>
        <ContactForm page={page}></ContactForm>
      </Box>
    </Box>
  )
}

export async function getStaticProps({ locale }) {
  const _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const service = new ContentfulService(_client)
  const page = await service.getContactPage()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "contact"])),
      page,
    },
  }
}

export default Contact
