import React, { useState } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { useTranslation } from "next-i18next"

const Faq = () => {
  return <>how it works</>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export default Faq
