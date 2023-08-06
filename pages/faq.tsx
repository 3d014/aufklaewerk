import React, { useEffect, useState } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { useTranslation } from "next-i18next"
import { createClient } from "contentful"
import { ContentfulService } from "../src/contentful-service"
import FaqPage from "../src/models/faq-page"

interface Question {
  id: number
  question: string
  answer: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Was macht Aufklärwerk?",
    answer:
      "Aufklärwerk versucht Gleichberechtigung und Miteinander in der Gesellschaft zu fördern, indem wir Initiativen gegen Vorurteile, Diskriminierung und Ausgrenzung unterstützen. Wir wollen sozialen Organisationen die Möglichkeit geben, ihre Angebote im Internet auf einem zentralen Ort anzubieten. Gleichzeitig sollen Interessierte problemlos passende Angebote finden, und diese problemlos buchen und in Anspruch nehmen können",
  },
  {
    id: 2,
    question: "Warum sollte ich Aufklärwerk nutzen?",
    answer:
      "Aufklärwerk vereinfacht das Anbieten und das Suchen von Begegnungsangeboten jeglicher Art. Anbietenden Organisationen wird die Problematik eines Web-Auftritts abgenommen. Diesen ermöglichen wir eine kostenlose Darstellung im Internet auf unserer Plattform. Suchende Organisationen hingegen haben die Möglichkeit Angebote in ihrer Nähe zu finden ohne sich durch den Dschungel aus Google Ergebnissen kämpfen zu müssen.",
  },
  {
    id: 3,
    question: "Was muss ich als Anbietende Organisation machen?",
    answer:
      "Eigentlich nicht viel! Kontaktieren Sie uns einfach, wir senden Ihnen ein Formular zu und Sie haben in Null komma nichts einen Webauftritt!",
  },
  {
    id: 4,
    question: "Und was muss ich als Suchende Person/Organisation machen?",
    answer: "Gehen Sie auf die Startseite und schauen Sie sich über die Suchmaske einfach mal in Ihrer Stadt um!",
  },
]

const SELECTED_COLOR = "#FF5405"
const TEXT_COLOR = "#397870"

const classes = {
  content: {
    width: "750px",
    minHeight: "100vh",
  },
  accordion: {
    "&:before": {
      display: "none",
    },
    border: "none",
    "& .MuiTypography-root": {
      fontSize: "16px",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(45deg)",
      transitionDuration: "400ms",
    },
  },
  accordionTitle: {
    textAlign: "left",
    height: "90px",
    border: "none",
  },
  accordionDetails: {
    textAlign: "left",
    border: "none",
    color: TEXT_COLOR,
  },
}

interface FaqPageProps {
  page: FaqPage
}

const Faq = ({ page }: FaqPageProps) => {
  const [expanded, setExpanded] = useState<string | null>()

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={classes.content}>
        <h1 style={{ marginBottom: "10px" }}>{page?.faqHeadline}</h1>
        {page?.questions?.map((q) => {
          return (
            <Accordion
              key={q.id}
              expanded={expanded === q.id}
              onChange={() => setExpanded(expanded === q.id ? null : q.id)}
              sx={classes.accordion}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: expanded === q.id ? SELECTED_COLOR : "black" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                  ...classes.accordionTitle,
                  color: expanded === q.id ? SELECTED_COLOR : TEXT_COLOR,
                }}
              >
                <Typography>{q.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={classes.accordionDetails}>
                <Typography>{q.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
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
  const page = await service.getFaqPage()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "faq"])),
      page,
    },
  }
}

export default Faq
