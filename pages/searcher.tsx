"use client"
import React from "react"
import Picker from "../src/components/picker/Picker"
import Image from "next/image"
import { Box, Grid, List, ListItem, ListItemText, useMediaQuery } from "@mui/material"
import OfferingCard from "../src/components/offering-card/OfferingCard"
import CheckIcon from "@mui/icons-material/Check"
import { classes } from "../styles/Searcher.styles"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { filterByType } from "../utils/offeringFilters"
import { OfferDto } from "../src/models/offer-dto"
import { createClient } from "contentful"
import { ContentfulService } from "../src/contentful-client"

const Searcher = ({ offers }: { offers: OfferDto[] }) => {
  const isMatch = useMediaQuery("(max-width:800px)")
  const { t } = useTranslation(["searcher"])
  const router = useRouter()
  const [filteredOffers, setFilteredOffers] = useState([])

  useEffect(() => {
    if (offers == null) {
      return
    }

    const queryParams = new URLSearchParams(router.asPath.split("?")[1])
    const filteredThemes = queryParams.get("filteredThemes")
    const filteredOfferType = queryParams.get("filteredOfferType")
    const filteredLocation = queryParams.get("filteredLocation")

    let filteredOffers = offers.map((offer) => offer)

    if (filteredThemes) {
      const filteredThemesArray = filteredThemes.split(",")
      filteredOffers = filteredOffers.filter((offer) => {
        const themeTags = offer.tags.map((tag) => tag)
        return themeTags.some((tag) => filteredThemesArray.includes(tag))
      })
    }

    filteredOffers = filterByType(filteredOffers, filteredOfferType, filteredLocation)
    setFilteredOffers(filteredOffers)
  }, [router.asPath, offers])

  return (
    <>
      <Box sx={{ ...classes.diversityHandsContainer }}>
        <Image
          src="/assets/images/diversityHands.jpg"
          alt="diversity hands"
          fill
          priority
          style={classes.diversityHandsImage}
        ></Image>
        <Grid container spacing={1} sx={{ ...classes.diversityHandsContent }}>
          <Grid
            item
            xs={12}
            sx={{
              ...classes.diversityHandsContentTitleWrapper,
            }}
          >
            <h3 style={classes.diversityHandsContentTitle}>{t("diversityHandsTitle")}</h3>
          </Grid>
          <Grid item xs={12} sx={{ ...classes.pickerContainer }}>
            <Picker offers={offers}></Picker>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "space-around" }}>
        {filteredOffers.map((offer, index) => {
          return <OfferingCard key={`offer-${index}`} offer={offer}></OfferingCard>
        })}
      </Box>

      <Grid container spacing={2} direction={isMatch ? "column" : "row"}>
        <Grid item xs={isMatch ? 12 : 6}>
          <img src="/assets/images/searcherThirdSectionImage.jpg" style={classes.searcherProccessImage}></img>
        </Grid>

        <Grid item xs={isMatch ? 12 : 6} style={classes.searcherReasonsContainer}>
          <List>
            <ListItem>
              <CheckIcon sx={{ ...classes.checkIcon }}></CheckIcon>
              <ListItemText>{t("searcherReason1")}</ListItemText>
            </ListItem>

            <ListItem>
              <CheckIcon sx={{ ...classes.checkIcon }}></CheckIcon>
              <ListItemText>{t("searcherReason2")}</ListItemText>
            </ListItem>

            <ListItem>
              <CheckIcon sx={{ ...classes.checkIcon }}></CheckIcon>
              <ListItemText>{t("searcherReason3")}</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
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
      ...(await serverSideTranslations(locale, ["common", "footer", "searcher"])),
      offers,
    },
  }
}

export default Searcher
