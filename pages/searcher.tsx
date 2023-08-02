'use client';
import React, {useContext} from "react"
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
import {OffersContext, useOffers} from "../src/contexts/offers-context/OffersContext";
import {OfferDto} from "../src/models/offer-dto";
import {ContentfulService} from "../src/contentful-client";

const Searcher = () => {
  const isMatch = useMediaQuery("(max-width:800px)")
  const { t } = useTranslation(["searcher"])
  const router = useRouter()
  const [filteredOfferings, setFilteredOfferings] = useState([])
  const [offerings, setOffers] = useState<OfferDto[]>([])

  useEffect(() => {
    void (async () => {
      const result = await ContentfulService.getOffers()
      setOffers(result)
    })()
  },[ContentfulService])

  useEffect(() => {
    if(offerings == null)
    {
      return
    }

    const queryParams = new URLSearchParams(router.asPath.split("?")[1])
    const filteredThemes = queryParams.get("filteredThemes")
    const filteredOfferType = queryParams.get("filteredOfferType")
    const filteredLocation = queryParams.get("filteredLocation")

    let filteredOffers = offerings.map((offer) => offer)

    if (filteredThemes) {
      const filteredThemesArray = filteredThemes.split(",")
      filteredOffers = filteredOffers.filter((offer) => {
        const themeTags = offer.tags.map((tag) => tag)
        return themeTags.some((tag) => filteredThemesArray.includes(tag))
      })
    }

    filteredOffers = filterByType(filteredOffers, filteredOfferType, filteredLocation)
    setFilteredOfferings(filteredOffers)
  }, [router.asPath, offerings])

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
            <Picker offerings={offerings}></Picker>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "space-around" }}>
        {filteredOfferings.map((offer, index) => {
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "searcher"])),
    },
  }
}

export default Searcher
