import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPaths} from "next";
import React, {useEffect, useState} from "react";
import {Grid, useMediaQuery} from "@mui/material";
import ImageCarousel from "../../src/components/layout/components/image-carousel/ImageCarousel";
import OfferDetails from "../../src/views/offer-details/OfferDetails";
import {OrganizationDto} from "../../src/models/organization-dto";

const classes = {
  content: {
    width: "100%",
    minHeight: "100vh",
  },
}

const OrganizationDetails: React.FC = () => {
  const [organization, setOrganization] = useState<OrganizationDto | null>(null)
  const isMobile = useMediaQuery("(max-width:800px)")

  useEffect(() => {
    void (async () => {
      // api call to fetch details at some point
    })()

    const org = organization
    setOrganization(org)
  })

  if (organization == null) {
    return <></>
  }

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={{ ...classes.content, padding: isMobile ? "10px" : "35px" }}>
        <img href={}/>
        <OfferDetails offer={offer} />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export default OrganizationDetails