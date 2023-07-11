import React, { useState } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Box, Button, Grid, useMediaQuery } from "@mui/material"
import Link from "next/link"
import { ContactForm } from "../src/components/contact-form/ContactForm"
import { classes } from "../styles/AboutUs.styles"


const filterOptions = ["Alle", "Gründer", "Marketing", "IT", "PR"]

interface member {
  name: string
  id: number
  portrait: string
  responsibility: {
    founder: boolean
    marketing: boolean
    it: boolean
    pr: boolean
  }
  age: string
  subject: string
  roles: string
}
const members: member[] = [
  {
    name: "Felix",
    id: 0,
    portrait: "felix.png",
    responsibility: {
      founder: true,
      marketing: false,
      it: true,
      pr: false,
    },
    age: "23",
    subject: "Wirtschaftsinformatik",
    roles: "Mitgründer | IT",
  },
  {
    name: "Johannes",
    id: 1,
    portrait: "johannes.jpeg",
    responsibility: {
      founder: true,
      marketing: false,
      it: false,
      pr: true,
    },
    age: "23",
    subject: "Technology Entrepreneurship",
    roles: "Mitgründer | Finanzen | UX",
  },
  {
    name: "Jingyi",
    id: 2,
    portrait: "jingyi.jpeg",
    responsibility: {
      founder: false,
      marketing: false,
      it: true,
      pr: true,
    },
    age: "21",
    subject: "Wirtschaftsingenieurwesen",
    roles: "UX | PR & Marketing",
  },
  {
    name: "Julia",
    id: 3,
    portrait: "julia.jpeg",
    responsibility: {
      founder: false,
      marketing: true,
      it: false,
      pr: true,
    },
    age: "20",
    subject: "Wirtschaftsinformatik",
    roles: "UX | PR & Marketing",
  },
  {
    name: "Tim",
    id: 4,
    portrait: "tim.jpeg",
    responsibility: {
      founder: false,
      marketing: false,
      it: true,
      pr: false,
    },
    age: "25",
    subject: "Wirtschaftsinformatik",
    roles: "IT",
  },
  {
    name: "Giuseppe",
    id: 5,
    portrait: "giuseppe.png",
    responsibility: {
      founder: false,
      marketing: false,
      it: false,
      pr: true,
    },
    age: "25",
    subject: "Wirtschaftspsychologie",
    roles: "PR | Strategie",
  },
  {
    name: "Emilie",
    id: 6,
    portrait: "emelie.png",
    responsibility: {
      founder: false,
      marketing: true,
      it: false,
      pr: true,
    },
    age: "23",
    subject: "Bioingenieurswesen",
    roles: "PR & Marketing",
  },
  {
    name: "Viola",
    id: 7,
    portrait: "viola.jpeg",
    responsibility: {
      founder: false,
      marketing: false,
      it: true,
      pr: false,
    },
    age: "25",
    subject: "Wirtschaftsinformatik",
    roles: "UX",
  },
  {
    name: "Manuel",
    id: 8,
    portrait: "manuel.jpg",
    responsibility: {
      founder: false,
      marketing: false,
      it: true,
      pr: false,
    },
    age: "23",
    subject: "Wirtschaftsinformatik",
    roles: "IT",
  },
  {
    name: "Helena",
    id: 9,
    portrait: "helena.jpeg",
    responsibility: {
      founder: false,
      marketing: true,
      it: false,
      pr: false,
    },
    age: "22",
    subject: "Wirtschaftsingenieurwesen",
    roles: "Marketing",
  },
  {
    name: "Leonie",
    id: 10,
    portrait: "leonie.jpeg",
    responsibility: {
      founder: false,
      marketing: true,
      it: false,
      pr: false,
    },
    age: "22",
    subject: "Wirtschaftsingenieurwesen",
    roles: "Marketing",
  },
  {
    name: "Marike",
    id: 11,
    portrait: "marike.jpeg",
    responsibility: {
      founder: false,
      marketing: true,
      it: false,
      pr: false,
    },
    age: "19",
    subject: "Wirtschaftsingenieurwesen",
    roles: "Marketing",
  },
  {
    name: "Felix",
    id: 12,
    portrait: "felix_hasse.jpg",
    responsibility: {
      founder: false,
      marketing: false,
      it: true,
      pr: false,
    },
    age: "23",
    subject: "Wirtschaftsinformatik",
    roles: "IT",
  },
]

const filterMembers = (filterOption: string) => {
  if (filterOption === "Alle") {
    return members
  }

  const filterMap = {
    Gründer: "founder",
    Marketing: "marketing",
    IT: "it",
    PR: "pr",
  }

  const filteredMembers = members.filter((member) => member.responsibility[filterMap[filterOption]])
  return filteredMembers
}

const AboutUsPage = () => {
  const { t } = useTranslation(["aboutUs"])
  const isMatch = useMediaQuery("(max-width:780px)")
  const isSmallScreen = useMediaQuery("(max-width:450px)")

  const [activeFilterButton, setActiveFilterButton] = useState<string>("Alle")

  const filteredMembers = filterMembers(activeFilterButton)

  const handleFilterButton = (option: string) => {
    setActiveFilterButton(option)
  }
  return (
    <>
      <Box>
        <img
          src="/assets/images/aufklaeverkTeam.jpg"
          style={classes.aufklaeverkTeamImage}
        ></img>
        <div
          style={classes.aufklaeverkTeamTextSection}
        >
          <h3 style={{ fontSize: "32px", color: "white", fontFamily: "DM Serif Text, serif" }}>
            {t("aufklaeverkTeamTitle")}
          </h3>
         {t("aufklaeverkTeamTextSection1")} <span style={{ color: "#ff5100" }}>{t("aufklaeverkTeamTextSectionColored")} </span> 
          {t("aufklaeverkTeamTextSection2")}
        </div>
      </Box>
      <Box
        style={classes.subTextSection}
      >
        {t("subtext1")}
        <br></br>
        {t("subtext2")}
      </Box>

      <Box
        style={
          isMatch
            ? classes.smallerScreen?.orangeBoxContainer
            : classes.largerScreen?.orangeBoxContainer
        }
      >
        <Box style={isMatch ? classes.smallerScreen?.huggingPeopleWrapper:classes.smallerScreen?.huggingPeopleWrapper }>
          <img
            src="/assets/images/huggingPeople.jpg"
            style={classes.huggingPeopleImage}
          ></img>
        </Box>
        <Box
          style={
            isMatch
              ? classes.smallerScreen?.orangeBox
              : classes.largerScreen?.orangeBox
          }
        >
          <h4 style={classes.orangeBoxTopLeftText}>{t("orangeBoxTopLeft")}</h4>
          <h3
            style={
              isMatch
                ? classes.smallerScreen?.orangeBoxTitle
                : classes.largerScreen?.orangeBoxTitle
            }
          >
            {t("orangeBoxTitle")}
          </h3>
          <p style={classes.orangeBoxParagraph}>
           {t("orangeBoxParagraph1")}
          </p>

          <p style={classes.orangeBoxParagraph}>
          {t("orangeBoxParagraph2")}
          </p>
          <p style={classes.orangeBoxParagraph}>
          {t("orangeBoxParagraph3")}
          </p>
          <ul style={classes.orangeBoxList}>
            <li>{t("orangeBoxListItem1")}</li>
            <li>{t("orangeBoxListItem2")}</li>
            <li>{t("orangeBoxListItem3")}</li>
          </ul>
          <Link href="/offerer" passHref>
            <Button
              variant="contained"
              style={classes.orangeBoxButton}
            >
              {" "}
              {t("orangeBoxButton")}
              {" "}
            </Button>
          </Link>
        </Box>
      </Box>

      <div
        style={classes.memberContainerTopPart}
      >
        <h3
          style={
            isMatch
              ? classes.smallerScreen?.memberContainerTitle
              : classes.largerScreen?.memberContainerTitle
          }
        >
          {t("memberContainerTitle")}
        </h3>
        <p style={classes.memberContainerText}>{t("memberContainerText")}</p>

        <div>
          {filterOptions.map((option, index) => {
            return (
              <Button
                variant="contained"
                key={index}
                style={
                  activeFilterButton === option
                    ? classes.activeFilterButton
                    : classes.filterButton
                }
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
      <Box
        style={classes.memberContainer}
      >
        <Box
          sx={classes.innerMemberContainer}
        >
          {filteredMembers.map((member, index) => {
            return (
              <Box key={index} sx={{ margin: "30px" }}>
                <Box>
                  <img
                    src={`/assets/images/members/${member.portrait}`}
                    style={
                      isSmallScreen
                        ? classes.smallerScreen?.memberImage
                        : classes.largerScreen?.memberImage
                    }
                  ></img>
                  <div
                    style={
                      isSmallScreen
                        ? classes.smallerScreen?.memberInfo
                        : classes.largerScreen?.memberInfo
                    }
                  >
                    <h5 style={classes.memberName}>{member.name}</h5>
                    <p style={classes.memberAge}> {member.age}</p>
                    <p style={isMatch ? classes.smallerScreen?.memberSubject : classes.largerScreen?.memberSubject}>
                      {member.subject}
                    </p>
                    <div>{member.roles}</div>
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


      <Grid container direction={isMatch?'column-reverse':'row'} style={{margin:'50px 0 50px 0'}}>
        <Grid item xs={isMatch?12:6} style={classes.additionalInfo}>
          <h3>{t("additionalInfoTitle")}</h3>
          <p style={{fontSize:'20px'}}>{t("additionalInfoParagraph")}</p>
          <h2>Aufklärwerk</h2>
          <p style={{margin:0}}>Moltkestraße 33</p>
          <p style={{margin:0}}>76331 Karlsruhe</p>
          <p style={{margin:0}}>aufklaerwerk@kit.enactus.de</p>
        </Grid>
        <Grid item xs={isMatch?12:6}><ContactForm></ContactForm></Grid>
      </Grid>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer","contact","aboutUs"])),
    },
  }
}

export default AboutUsPage
