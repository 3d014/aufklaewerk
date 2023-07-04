import React from "react"
import { ContactForm } from "../src/components/contact-form/ContactForm"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Box, useMediaQuery } from "@mui/material"

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
const Contact = () => {
  const isMatch = useMediaQuery("(max-width:640px)")
  return (
    <Box sx={isMatch ? classes.smallerScreen.mainContainer : classes.largerScreen.mainContainer}>
      <Box sx={{ position: "relative", background: "white", padding: "3rem 1rem 1rem 1rem", minHeight: "100vh" }}>
        <ContactForm></ContactForm>
      </Box>
    </Box>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export default Contact
