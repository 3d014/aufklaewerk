import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

const AboutUsPage = () => {
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}></div>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export default AboutUsPage
