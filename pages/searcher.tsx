import React from "react"
import Picker from "../src/components/picker/Picker"
import Image from "next/image"
import { Box, Grid, List, ListItem, ListItemText, useMediaQuery } from "@mui/material"
import OfferingCard from "../src/components/offering-card/OfferingCard"
import CheckIcon from "@mui/icons-material/Check"
import { classes } from "../styles/Searcher.styles"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { offerings } from "../src/test-data"
import { useTranslation } from "next-i18next"

const Searcher = () => {
  const isMatch = useMediaQuery("(max-width:800px)")
  const { t } = useTranslation(["searcher"])
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
            <Picker></Picker>
          </Grid>
        </Grid>
      </Box>

      <Grid container sx={{ ...classes.searchCardsContainer }}>
        {offerings.map((offer) => {
          return (
            <Grid key={offer.id} item xs={12} sm={6} md={4} lg={3} sx={{ ...classes.cardWrapper }}>
              <OfferingCard offer={offer} />
            </Grid>
          )
        })}
      </Grid>

      <Grid container spacing={2} direction={isMatch?'column':'row'}>
        <Grid item xs={isMatch?12:6}>
        <img src="/assets/images/searcherThirdSectionImage.jpg" style={classes.searcherProccessImage}></img>
        </Grid>

        <Grid item xs={isMatch?12:6} style={classes.searcherReasonsContainer}>

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
      ...(await serverSideTranslations(locale, ["common", "footer","searcher"])),
    },
  }
}

export default Searcher
