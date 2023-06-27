import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Faq = () => {
  return <div>Faq page</div>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export default Faq
