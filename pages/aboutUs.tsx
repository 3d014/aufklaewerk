import React, { useEffect, useState } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Box, Button, Grid, useMediaQuery } from "@mui/material"
import Link from "next/link"
import { ContactForm } from "../src/components/contact-form/ContactForm"
import { classes } from "../styles/AboutUs.styles"
import { MemberDto } from "../src/models/member-dto"
import { createClient } from "contentful"
import { ContentfulService } from "../src/contentful-service"
import { AboutUsPage } from "../src/models/about-us"

const filterOptions = ["Alle", "Gründer", "Marketing", "IT", "PR"]

interface AboutUsProps {
  members: MemberDto[]
  aboutUsPage: AboutUsPage
}

const AboutUsPage = ({ members, aboutUsPage }: AboutUsProps) => {
  const { t } = useTranslation(["aboutUs"])
  const isMatch = useMediaQuery("(max-width:780px)")
  const isSmallScreen = useMediaQuery("(max-width:450px)")
  const [activeFilterButton, setActiveFilterButton] = useState<string>("Alle")

  const filterMembers = (filterOption: string) => {
    if (filterOption === "Alle") {
      return members
    }

    const filterMap = {
      Gründer: "isGruender",
      Marketing: "isMarketing",
      IT: "isIT",
      PR: "isPR",
    }

    const filteredMembers = members.filter((member: any) => member[filterMap[filterOption]])
    return filteredMembers
  }

  const filteredMembers = filterMembers(activeFilterButton)

  const handleFilterButton = (option: string) => {
    setActiveFilterButton(option)
  }
  return (
    <>
      <Box>
        <img src="/assets/images/aufklaeverkTeam.jpg" style={classes.aufklaeverkTeamImage}></img>
        <div style={classes.aufklaeverkTeamTextSection}>
          <h3 style={{ fontSize: "32px", color: "white", fontFamily: "DM Serif Text, serif" }}>
            {aboutUsPage.heroSectionHeadline}
          </h3>
          {aboutUsPage.heroSectionText}
        </div>
      </Box>
      <Box style={classes.subTextSection}>{aboutUsPage.subheadline}</Box>
      <Box style={isMatch ? classes.smallerScreen?.orangeBoxContainer : classes.largerScreen?.orangeBoxContainer}>
        <Box
          style={isMatch ? classes.smallerScreen?.huggingPeopleWrapper : classes.smallerScreen?.huggingPeopleWrapper}
        >
          <img src={aboutUsPage.celebrationOfHumanity.pictureUrl} style={classes.huggingPeopleImage}></img>
        </Box>
        <Box style={isMatch ? classes.smallerScreen?.orangeBox : classes.largerScreen?.orangeBox}>
          <h4 style={classes.orangeBoxTopLeftText}>{aboutUsPage.celebrationOfHumanity.subheadline}</h4>
          <h3 style={isMatch ? classes.smallerScreen?.orangeBoxTitle : classes.largerScreen?.orangeBoxTitle}>
            {aboutUsPage.celebrationOfHumanity.headline}
          </h3>
          <p style={classes.orangeBoxParagraph}>{aboutUsPage.celebrationOfHumanity.text}</p>
          <ul style={classes.orangeBoxList}>
            <li>{t("orangeBoxListItem1")}</li>
            <li>{t("orangeBoxListItem2")}</li>
            <li>{t("orangeBoxListItem3")}</li>
          </ul>
          <Link href="/offerer" passHref>
            <Button variant="contained" style={classes.orangeBoxButton}>
              {" "}
              {aboutUsPage.celebrationOfHumanity.buttonText}
            </Button>
          </Link>
        </Box>
      </Box>

      <div style={classes.memberContainerTopPart}>
        <h3 style={isMatch ? classes.smallerScreen?.memberContainerTitle : classes.largerScreen?.memberContainerTitle}>
          {aboutUsPage.teamSection.headline}
        </h3>
        <p style={classes.memberContainerText}>{aboutUsPage.teamSection.subheadline}</p>

        <div>
          {filterOptions.map((option, index) => {
            return (
              <Button
                variant="contained"
                key={index}
                style={activeFilterButton === option ? classes.activeFilterButton : classes.filterButton}
                onClick={(e) => {
                  handleFilterButton(option)
                }}
              >
                {option}
              </Button>
            )
          })}
        </div>
      </div>
      <Box style={classes.memberContainer}>
        <Box sx={classes.innerMemberContainer}>
          {filteredMembers.map((member, index) => {
            return (
              <Box key={index} sx={{ margin: "30px" }}>
                <Box>
                  <img
                    src={member.imageUrl}
                    style={isSmallScreen ? classes.smallerScreen?.memberImage : classes.largerScreen?.memberImage}
                  ></img>
                  <div style={isSmallScreen ? classes.smallerScreen?.memberInfo : classes.largerScreen?.memberInfo}>
                    <h5 style={classes.memberName}>{member.name}</h5>
                    <p style={classes.memberAge}> {member.alter}</p>
                    <p style={isMatch ? classes.smallerScreen?.memberSubject : classes.largerScreen?.memberSubject}>
                      {member.studiengang}
                    </p>
                    <div>{member.position}</div>
                  </div>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
      <div style={classes.memberContainerBottomPart}></div>

      <div style={classes.worldMapContainer}>
        <a href="https://www.enactus.de/karlsruhe">
          <img src="/assets/images/worldMap.png" style={classes.worldMapImage}></img>
        </a>
      </div>

      <Grid container direction={isMatch ? "column-reverse" : "row"} style={{ margin: "50px 0 50px 0" }}>
        <Grid item xs={isMatch ? 12 : 6} style={classes.additionalInfo}>
          <h3>{t("additionalInfoTitle")}</h3>
          <p style={{ fontSize: "20px" }}>{t("additionalInfoParagraph")}</p>
          <h2>Aufklärwerk</h2>
          <p style={{ margin: 0 }}>Moltkestraße 33</p>
          <p style={{ margin: 0 }}>76331 Karlsruhe</p>
          <p style={{ margin: 0 }}>aufklaerwerk@kit.enactus.de</p>
        </Grid>
        <Grid item xs={isMatch ? 12 : 6}>
          <ContactForm></ContactForm>
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
  const members = await service.getMembers()
  const aboutUsPage = await service.getAboutUsPage()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "contact", "aboutUs"])),
      members,
      aboutUsPage,
    },
  }
}

export default AboutUsPage
