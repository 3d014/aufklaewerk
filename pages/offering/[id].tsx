import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { OfferDto } from "../../src/models/offer-dto"
import { Grid, useMediaQuery } from "@mui/material"
import ImageCarousel from "../../src/components/layout/components/image-carousel/ImageCarousel"
import OfferDetails from "../../src/views/offer-details/OfferDetails"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticPaths } from "next"
import { createClient } from "contentful"
import { ContentfulService } from "../../src/contentful-client"

const classes = {
  content: {
    width: "100%",
    minHeight: "100vh",
  },
}

const OfferingDetails: React.FC = ({ offers }: { offers: OfferDto[] }) => {
  const router = useRouter()
  const [offer, setOffer] = useState<OfferDto | undefined>()
  const isMobile = useMediaQuery("(max-width:800px)")

  useEffect(() => {
    const offer = offers.find((offer) => offer.id === router.query.id)
    setOffer(offer)
  }, [router.query.id, offers])

  if (offer == null) {
    return <></>
  }

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={{ ...classes.content, padding: isMobile ? "10px" : "35px" }}>
        <ImageCarousel imageUrls={offer.images.map((img) => img.url)} />
        <OfferDetails offer={offer} />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps({ locale }) {
  const _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const service = new ContentfulService(_client)
  const offers = await service.getOffers()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "offerDetails"])),
      offers,
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
