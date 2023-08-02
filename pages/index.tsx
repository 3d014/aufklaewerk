import React, {useEffect, useState} from "react"
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
import {OfferDto} from "../src/models/offer-dto";
import {ContentfulService} from "../src/contentful-client";

export default function Home() {
  const { t } = useTranslation(["index"])
  const isSmallScreen = useMediaQuery("(max-width:550px)")
  const isMatch = useMediaQuery("(max-width:800px)")
  const [offerings, setOffers] = useState<OfferDto[]>([])

  useEffect(() => {
    void (async () => {
      const result = await ContentfulService.getOffers()
      setOffers(result)
    })()
  },[ContentfulService])


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
            <h3 style={classes.diversityHandTitle}>{t("diversityHandTitle")}</h3>
          </Grid>
          <Grid item xs={12} sx={{ ...diversityHandsBox.pickerContainer }}>
            <Picker offerings={offerings}></Picker>
          </Grid>
        </Grid>
      </Box>

      <div
        style={isSmallScreen ? classes.smallerScreen.soFunktioniertSection : classes.largerScreen.soFunktioniertSection}
      >
        <p style={classes.soFunktioniertHeader}>{t("soFunktionertHeader")}</p>
        <h3 style={isSmallScreen ? classes.smallerScreen.soFunktioniert : classes.largerScreen.soFunktioniert}>
          {t("soFunktioniert")}
        </h3>
      </div>

      <div style={classes.soFunktioniertMap}>
        <img src="/assets/images/suchparameter.ec9c079a.svg" style={classes.soFunktioniertMapImage}></img>
        <h2 style={classes.soFunktioniertMapText}>{t("soFunktioniertMapText1")}</h2>
        <img src="/assets/images/angebot-suchen.2ee1baf7.svg" style={classes.soFunktioniertMapImage}></img>
        <h2 style={classes.soFunktioniertMapText}>{t("soFunktioniertMapText2")}</h2>
        <img src="/assets/images/jetzt-buchen.ed895604.svg" style={classes.soFunktioniertMapImage}></img>
        <h2 style={classes.soFunktioniertMapText}>{t("soFunktioniertMapText3")}</h2>
      </div>

      <Grid container direction={isSmallScreen ? "column" : "row"} style={classes.HelpContainer}>
        <Grid item container spacing={2} direction={"row"} xs={isSmallScreen ? 12 : 6} style={classes.help}>
          <Grid item xs={9}>
            <h2 style={classes.helpQuestion}>{t("helpQuestion")}</h2>
            <p style={classes.helpAnswer}>{t("helpAnswer")}</p>
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
            {t("moreInfo")}
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
                {t("uberAufklaeverkInfoHeader")}
              </h4>
              <h3
                style={
                  isSmallScreen
                    ? classes.smallerScreen.uberAufklaeverkTitle
                    : classes.smallerScreen.uberAufklaeverkTitle
                }
              >
                {t("uberAufklaeverkTitle")}
              </h3>
              <p style={classes.uberAufklaeverkText}>{t("uberAufklaeverkText1")}</p>
              <p style={{ padding: "10px", color: "#004c45" }}>{t("uberAufklaeverkText2")}</p>
              <p style={{ padding: "10px", color: "#004c45" }}>{t("uberAufklaeverkText3")}</p>

              <Link href="/aboutUs" passHref>
                <Button variant="contained" style={classes.uberAufklaeverkButton}>
                  {" "}
                  {t("uberAufklaeverkButton")}{" "}
                </Button>
              </Link>
            </Box>
            <Box style={isMatch ? classes.smallerScreen.subwayPairBox : classes.largerScreen.subwayPairBox}>
              <img
                src="/assets/images/subwayPair.jpg"
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
            <Paper className="container" sx={classes.flipCard}>
              <Box className="card" sx={classes.flipCardContext}>
                <Box className="front" sx={classes.flipCardFront}>
                  <img src="/assets/images/blm.jpg" style={classes.flipCardFrontImage}></img>
                </Box>
                <Box className="back" sx={classes.flipCardBack}>
                  <img src="/assets/images/blm.jpg" style={classes.flipCardBackImage}></img>
                  <p style={classes.flipCardBackText}>{t("flipCardBackText1")}</p>
                </Box>
              </Box>
            </Paper>

            <Paper className="container" sx={classes.flipCard}>
              <Box className="card" sx={classes.flipCardContext}>
                <Box className="front" sx={classes.flipCardFront}>
                  <img src="/assets/images/equality.jpg" style={classes.flipCardFrontImage}></img>
                </Box>
                <Box className="back" sx={classes.flipCardBack}>
                  <img src="/assets/images/equality.jpg" style={classes.flipCardBackImage}></img>
                  <p style={classes.flipCardBackText}>{t("flipCardBackText2")}</p>
                </Box>
              </Box>
            </Paper>

            <Paper className="container" sx={classes.flipCard}>
              <Box className="card" sx={classes.flipCardContext}>
                <Box className="front" sx={classes.flipCardFront}>
                  <img src="/assets/images/blm.jpg" style={classes.flipCardFrontImage}></img>
                </Box>
                <Box className="back" sx={classes.flipCardBack}>
                  <img src="/assets/images/blm.jpg" style={classes.flipCardBackImage}></img>
                  <p style={classes.flipCardBackText}>{t("flipCardBackText3")}</p>
                </Box>
              </Box>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "index"])),
    },
  }
}
