import React, {useState} from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface Question{
  id: number
  question: string
  answer: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Was macht Aufklärwerk?",
    answer: "Aufklärwerk versucht Gleichberechtigung und Miteinander in der Gesellschaft zu fördern, indem wir Initiativen gegen Vorurteile, Diskriminierung und Ausgrenzung unterstützen. Wir wollen sozialen Organisationen die Möglichkeit geben, ihre Angebote im Internet auf einem zentralen Ort anzubieten. Gleichzeitig sollen Interessierte problemlos passende Angebote finden, und diese problemlos buchen und in Anspruch nehmen können"
  },
  {
    id:2,
    question: "Warum sollte ich Aufklärwerk nutzen?",
    answer: "Aufklärwerk vereinfacht das Anbieten und das Suchen von Begegnungsangeboten jeglicher Art. Anbietenden Organisationen wird die Problematik eines Web-Auftritts abgenommen. Diesen ermöglichen wir eine kostenlose Darstellung im Internet auf unserer Plattform. Suchende Organisationen hingegen haben die Möglichkeit Angebote in ihrer Nähe zu finden ohne sich durch den Dschungel aus Google Ergebnissen kämpfen zu müssen.",
  },
  {
    id: 3,
    question: "Was muss ich als Anbietende Organisation machen?",
    answer: "Eigentlich nicht viel! Kontaktieren Sie uns einfach, wir senden Ihnen ein Formular zu und Sie haben in Null komma nichts einen Webauftritt!",
  },
  {
    id:4,
    question: "Und was muss ich als Suchende Person/Organisation machen?",
    answer: "Gehen Sie auf die Startseite und schauen Sie sich über die Suchmaske einfach mal in Ihrer Stadt um!",
  },
]

const classes = {
  accordion: {
    border: "none",
  }
}

const Faq = () => {
  const [expanded, setExpanded] = useState<number | null>();

  const handleQuestionClick = (id: number) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={{ width: "700px"}}>
        <h1 style={{ marginBottom: "10px"}}>Willkommen in unserem FAQ</h1>
        {
          questions.map(q => {
            return (
              <Accordion
                key={q.id}
                expanded={expanded === q.id}
                onChange={() => handleQuestionClick(q.id)}
                sx={classes.accordion}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{ textAlign: "left", height: "80px", border: "none", color: expanded === q.id ? "#FF5405" : "#004c45"}}
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    {q.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ textAlign: "left", height: "80px", border: "none", color: "#004c45"}}
                >
                  <Typography>
                    {q.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })
        }
      </Grid>
    </Grid>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export default Faq
