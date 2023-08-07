import React, { useEffect, useState } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Box, Button, Grid, Paper, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Picker from "../src/components/picker/Picker"
import { classes as diversityHandsBox } from "../styles/Searcher.styles"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import Link from "next/link"
import { classes } from "../styles/Index.styles"
import { useTranslation } from "next-i18next"
import { createClient } from "contentful"
import { ContentfulService } from "../src/contentful-service"
import { OfferDto } from "../src/models/offer-dto"
import FaqPage from "../src/models/faq-page"
import { LandingPage } from "../src/models/landing-page"

interface HomeProps {
  offers: OfferDto[]
  landingPage: LandingPage
}

export default function Home({ offers, landingPage }: HomeProps) {
  const { t } = useTranslation(["index"])
  const isSmallScreen = useMediaQuery("(max-width:550px)")
  const isMatch = useMediaQuery("(max-width:800px)")

  return (
    <div>
      <Box sx={{ ...diversityHandsBox.diversityHandsContainer }}>
        <Image
          src="/assets/images/diversityHands.jpg"
          alt="diversity hands"
          fill
          priority
          style={classes.diversityHandImage}
        ></Image>
        <Grid container spacing={1} sx={{ ...diversityHandsBox.diversityHandsContent }}>
          <Grid
            item
            xs={12}
            sx={{
              ...diversityHandsBox.diversityHandsContentTitle,
            }}
          >
            <h3 style={classes.diversityHandTitle}>{landingPage.heroSectionHeadline}</h3>
          </Grid>
          <Grid item xs={12} sx={{ ...diversityHandsBox.pickerContainer }}>
            <Picker offers={offers}></Picker>
          </Grid>
        </Grid>
      </Box>

      <div
        style={isSmallScreen ? classes.smallerScreen.soFunktioniertSection : classes.largerScreen.soFunktioniertSection}
      >
        <p style={classes.soFunktioniertHeader}>{landingPage.subheadline}</p>
        <h3 style={isSmallScreen ? classes.smallerScreen.soFunktioniert : classes.largerScreen.soFunktioniert}>
          {landingPage.headline}
        </h3>
      </div>

      <div style={classes.soFunktioniertMap}>
        {landingPage.kacheln.map((kachel, index) => {
          return (
            <div key={index}>
              <img src={kachel.kachelImgUrl} style={classes.soFunktioniertMapImage}></img>
              <h2 style={classes.soFunktioniertMapText}>{kachel.kachelText}</h2>
            </div>
          )
        })}
      </div>

      <Grid container direction={isSmallScreen ? "column" : "row"} style={classes.HelpContainer}>
        <Grid item container spacing={2} direction={"row"} xs={isSmallScreen ? 12 : 6} style={classes.help}>
          <Grid item xs={9}>
            <h2 style={classes.helpQuestion}>{landingPage.callToAction.boxHeadline}</h2>
            <p style={classes.helpAnswer}>{landingPage.callToAction.boxText}</p>
          </Grid>
          <Grid item xs={3}>
            <Link href="/offerer" passHref>
              {isSmallScreen ? (
                <ArrowDownwardIcon style={classes.helpArrow} fontSize={"large"}></ArrowDownwardIcon>
              ) : (
                <ArrowForwardIcon style={classes.helpArrow} fontSize={"large"}></ArrowForwardIcon>
              )}
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={isSmallScreen ? 12 : 6} style={classes.moreInfoWrapper}>
          <Link href="/howItWorks" passHref style={classes.moreInfo}>
            {landingPage.callToAction.linkText}
          </Link>
        </Grid>
      </Grid>

      <div>
        <div style={classes.curvedBorder}></div>
        <div style={classes.uberAufklaeverkOuterContainer}>
          <Box style={isMatch ? classes.smallerScreen.uberAufklaeverkInner : classes.largerScreen.uberAufklaeverkInner}>
            <Box
              style={isMatch ? classes.smallerScreen.uberAufklaeverkInfo : classes.smallerScreen.uberAufklaeverkInfo}
            >
              <h4
                style={
                  isSmallScreen
                    ? classes.smallerScreen.uberAufklaeverkInfoHeader
                    : classes.largerScreen.uberAufklaeverkInfoHeader
                }
              >
                {landingPage.ueberAkw.subheadline}
              </h4>
              <h3
                style={
                  isSmallScreen
                    ? classes.smallerScreen.uberAufklaeverkTitle
                    : classes.smallerScreen.uberAufklaeverkTitle
                }
              >
                {landingPage.ueberAkw.headline}
              </h3>
              <p style={{ padding: "20px", color: "#004c45", whiteSpace: "pre-line" }}>{landingPage.ueberAkw.text}</p>

              <Link href="/aboutUs" passHref>
                <Button variant="contained" style={classes.uberAufklaeverkButton}>
                  {landingPage.ueberAkw.buttonText}
                </Button>
              </Link>
            </Box>
            <Box style={isMatch ? classes.smallerScreen.subwayPairBox : classes.largerScreen.subwayPairBox}>
              <img
                src={landingPage.ueberAkw.pictureUrl}
                style={isSmallScreen ? classes.smallerScreen.subwayPairImage : classes.largerScreen.subwayPairImage}
              ></img>
            </Box>
          </Box>
        </div>
        <div style={classes.wavyBackground}></div>

        <div style={classes.flipCardOuterContainer}>
          <h4 style={classes.flipCardHeader}>{t("flipCardHeader")}</h4>
          <h3 style={classes.flipCardQuestion}>{t("flipCardQuestion")}</h3>
          <div style={classes.flipCardInnerContainer}>
            {landingPage.wusstestDu.map((item, index) => {
              return (
                <Paper key={index} className="container" sx={classes.flipCard}>
                  <Box className="card" sx={classes.flipCardContext}>
                    <Box className="front" sx={classes.flipCardFront}>
                      <img src={item.pictureUrl} style={classes.flipCardFrontImage}></img>
                    </Box>
                    <Box className="back" sx={classes.flipCardBack}>
                      <img src={item.pictureUrl} style={classes.flipCardBackImage}></img>
                      <p style={classes.flipCardBackText}>{item.text}</p>
                    </Box>
                  </Box>
                </Paper>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const service = new ContentfulService(_client)
  const offers = await service.getOffers()
  const landingPage = await service.getLandingPage()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "index"])),
      offers,
      landingPage,
    },
  }
}
