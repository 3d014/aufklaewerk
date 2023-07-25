import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { offerings } from "../../src/test-data"
import { OfferDto } from "../../src/models/offer-dto"
import { Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import ImageCarousel from "../../src/components/layout/components/image-carousel/ImageCarousel"
import OfferDetails from "../../src/views/offer-details/OfferDetails"

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

  useEffect(() => {
    void (async () => {
      // api call to fetch details at some point
    })()

    const offer = offerings.find((offer) => offer.id === router.query.id)
    setOffer(offer)
  })

  if (offer == null) {
    return <></>
  }

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={{ ...classes.content, padding: isMobile ? "10px" : "35px" }}>
        <ImageCarousel imageUrls={offer.imageUrls} />
        <OfferDetails offer={offer} />
      </Grid>
    </Grid>
  )
}

export default OfferingDetails
