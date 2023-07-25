import React from "react"
import Picker from "../src/components/picker/Picker"
import Image from "next/image"
import { Box, Grid, List, ListItem, ListItemText } from "@mui/material"
import OfferingCard from "../src/components/offering-card/OfferingCard"
import CheckIcon from "@mui/icons-material/Check"
import { classes } from "../styles/Searcher.styles"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { offerings } from "../src/test-data"

const Searcher = () => {

  return (
    <>
      <Box sx={{ ...classes.firstSectionBox }}>
        <Image
          src="/assets/images/diversityHands.jpg"
          alt="diversity hands"
          fill
          priority
          style={{ objectFit: "cover", zIndex: "-1" }}
        ></Image>
        <Grid container spacing={1} sx={{ ...classes.firstSectionGridContainer }}>
          <Grid
            item
            xs={12}
            sx={{
              ...classes.firstSectionSubtitleGrid,
            }}
          >
            <h3 style={{ color: "white", textAlign: "center" }}>mit Vorurteilen aufräumen.</h3>
          </Grid>
          <Grid item xs={12} sx={{ ...classes.pickerGrid }}>
            <Picker></Picker>
          </Grid>
        </Grid>
      </Box>

      <Grid container sx={{ ...classes.secondSectionGridContainer }}>
        {offerings.map((offer) => {
          return (
            <Grid key={offer.id} item xs={12} sm={6} md={4} lg={3} sx={{ ...classes.secondSectionGridItem }}>
              <OfferingCard offer={offer} />
            </Grid>
          )
        })}
      </Grid>

      <Grid container spacing={2} sx={{ ...classes.thirdSectionGridContainer }}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ ...classes.thirdSectionImageGrid }}>
          <Image
            src="/assets/images/searcherThirdSectionImage.jpg"
            alt="third Section image"
            fill
            style={{ objectFit: "contain", boxShadow: "0.2em 0.8em 0.8em #d3d3d3", borderRadius: "10px" }}
          ></Image>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} sx={{ ...classes.thirdSectionListGrid }}>
          <Box>
            <h1>Grunde uber Aufklarwerk zu buchen</h1>
          </Box>
          <List>
            <ListItem>
              <CheckIcon sx={{ ...classes.checkIcon }}></CheckIcon>
              <ListItemText>Lokale Angebote in Ihrer Nähe</ListItemText>
            </ListItem>

            <ListItem>
              <CheckIcon sx={{ ...classes.checkIcon }}></CheckIcon>
              <ListItemText>Transparenz im Buchungsprozess</ListItemText>
            </ListItem>

            <ListItem>
              <CheckIcon sx={{ ...classes.checkIcon }}></CheckIcon>
              <ListItemText>Angebote in Kategorien, die sie vorher nicht bedacht haben</ListItemText>
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
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export default Searcher
