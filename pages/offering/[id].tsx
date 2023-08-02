import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { OfferDto } from "../../src/models/offer-dto"
import { Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import ImageCarousel from "../../src/components/layout/components/image-carousel/ImageCarousel"
import OfferDetails from "../../src/views/offer-details/OfferDetails"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticPaths } from "next"
import {ContentfulService} from "../../src/contentful-client";

const classes = {
  content: {
    width: "100%",
    minHeight: "100vh",
  },
}

const OfferingDetails: React.FC = () => {
  const router = useRouter()
  const [offer, setOffer] = useState<OfferDto | undefined>()
  const isMobile = useMediaQuery("(max-width:800px)")
  const [offerings, setOffers] = useState<OfferDto[]>([])

  useEffect(() => {
    void (async () => {
      const result = await ContentfulService.getOffers()
      setOffers(result)
    })()
  },[ContentfulService])

  useEffect(() => {
    const offer = offerings.find(offer => offer.id === router.query.id)
    setOffer(offer)
  },[router.query.id, offerings])

  if (offer == null) {
    return <></>
  }

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={{ ...classes.content, padding: isMobile ? "10px" : "35px" }}>
        <ImageCarousel imageUrls={offer.images.map(img => img.url)} />
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
    fallback: "blocking", //indicates the type of fallback
  }
}

export default OfferingDetails
