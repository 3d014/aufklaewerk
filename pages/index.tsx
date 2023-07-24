import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Box, Button, Grid, Paper, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Picker from "../src/components/picker/Picker"
import { classes as diversityHandsBox } from "../styles/Searcher.styles"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import Link from "next/link"


export default function Home() {
  const isSmallScreen = useMediaQuery("(max-width:550px)")
  const isMatch = useMediaQuery("(max-width:800px)")
  
  
  return (
    <div>
      <Box sx={{ ...diversityHandsBox.firstSectionBox }}>
        <Image
          src="/assets/images/diversityHands.jpg"
          alt="diversity hands"
          fill
          priority
          style={{ objectFit: "cover", zIndex: "-1" }}
        ></Image>
        <Grid container spacing={1} sx={{ ...diversityHandsBox.firstSectionGridContainer }}>
          <Grid
            item
            xs={12}
            sx={{
              ...diversityHandsBox.firstSectionSubtitleGrid,
            }}
          >
            <h3 style={{ color: "white", textAlign: "center" }}>mit Vorurteilen aufräumen.</h3>
          </Grid>
          <Grid item xs={12} sx={{ ...diversityHandsBox.pickerGrid }}>
            <Picker></Picker>
          </Grid>
        </Grid>
      </Box>

      <div style={isSmallScreen ? { textAlign: "center" } : { textAlign: "left", margin: "50px 0 50px 100px" }}>
        <p style={{ color: "#004c45" }}>DU MÖCHSTEST HELFEN VORURTEILE ABZUBAUEN?</p>
        <h3
          style={
            isSmallScreen ? { fontWeight: "normal", fontSize: "26px" } : { marginTop: "20px", fontWeight: "normal" }
          }
        >
          So funktioniert's
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src="/assets/images/suchparameter.ec9c079a.svg"
          style={{ objectFit: "cover", width: "100%", maxWidth: "500px" }}
        ></img>
        <h2 style={{ fontWeight: "normal" }}>Gewünschtes Thema, den Ort und Datum für Begegnungsangebot angeben</h2>
        <img
          src="/assets/images/angebot-suchen.2ee1baf7.svg"
          style={{ objectFit: "cover", width: "100%", maxWidth: "500px" }}
        ></img>
        <h2 style={{ fontWeight: "normal" }}>
          Aus der Liste von Ergebnisse das Angebot auswählen, das am besten zu deinem Vorhaben passt
        </h2>
        <img
          src="/assets/images/jetzt-buchen.ed895604.svg"
          style={{ objectFit: "cover", width: "100%", maxWidth: "500px" }}
        ></img>
        <h2 style={{ fontWeight: "normal" }}>Angebot buchen und den Rest machen wir!</h2>
      </div>

      <Grid container direction={isSmallScreen ? "column" : "row"} style={{ margin: "50px 0 50px 0" }}>
        <Grid
          item
          container
          spacing={2}
          direction={"row"}
          xs={isSmallScreen ? 12 : 6}
          style={{ display: "flex", backgroundColor: "#95aba9", justifyContent: "center", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <h2 style={{ color: "white", fontWeight: "normal", margin: "0", padding: "5px" }}>
              Du bist Teil einer sozialen Organisation in Deutschland?
            </h2>
            <p style={{ color: "white", fontSize: "1.2em", padding: "5px" }}>
              Wir helfen dir Dein Angebot für Suchende sichtbar zu machen
            </p>
          </Grid>
          <Grid item xs={3}>
            <Link href="/offerer" passHref>
              {isSmallScreen ? (
                <ArrowDownwardIcon style={{ color: "white" }} fontSize={"large"}></ArrowDownwardIcon>
              ) : (
                <ArrowForwardIcon style={{ color: "white" }} fontSize={"large"}></ArrowForwardIcon>
              )}
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={isSmallScreen ? 12 : 6}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}
        >
          <Link href="/howItWorks" passHref style={{ color: "#95aba9", fontSize: "1.7em", fontWeight: "normal" }}>
            mehr Infos zum Buchungsablauf gibt's hier
          </Link>
        </Grid>
      </Grid>

      <div>
        <div
          style={{
            minHeight: "100px",
            backgroundColor: "#f0956a",
            borderRadius: "100% 100% 0 0%",
            marginBottom: "-5px",
          }}
        ></div>
        <div style={{ backgroundColor: "#f0956a", marginBottom: "-5px" }}>
          <Box
            style={
              isMatch
                ? { display: "flex", flexDirection: "column-reverse", padding: "50px 50px 50px 50px" }
                : {
                    height: "100vh",
                    display: "flex",
                    flexDirection: "row",
                    padding: "50px 100px 50px 100px",
                    alignItems: "center",
                  }
            }
          >
            <Box
              style={
                isMatch
                  ? {
                      padding: "20px 0px 20px 0px",
                      width: "100%",
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      borderRadius: "10px",
                    }
                  : {
                      borderRadius: "10px",
                      padding: "20px 20px 20px 20px",
                      width: "55%",
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }
              }
            >
              <h4
                style={
                  isSmallScreen
                    ? { color: "#ff5100", fontWeight: "normal", margin: "0" }
                    : { color: "#ff5100", fontWeight: "normal", margin: "0" }
                }
              >
                WAS STECKT HINTER AUFKLÄRWERK
              </h4>
              <h3
                style={
                  isSmallScreen
                    ? { padding: "0", margin: "0", color: "#004c45", fontSize: "30px" }
                    : { padding: "0", margin: "0", color: "#004c45" }
                }
              >
                Über Aufklärwerk
              </h3>
              <p style={{ padding: "10px", color: "#004c45" }}>
                Aufklärwerk ist eine Initiative von Studierenden für die gesamte Gesellschaft. Wir sind davon überzeugt,
                dass durch Begegnungsangebote Hass und Vorurteile in der Gesellschaft abgebaut werden können.
              </p>
              <p style={{ padding: "10px", color: "#004c45" }}>
                Mit unserer Plattform wollen wir die Suche und Buchung von Begegnungsangeboten deutlich einfacher und
                transparenter gestalten.
              </p>
              <p style={{ padding: "10px", color: "#004c45" }}>
                Somit sollen Vorurteile und Diskriminierung in der Gesellschaft abgebaut und die Vorraussetzungen für
                ein Miteinander geschaffen werden.
              </p>

              <Link href="/aboutUs" passHref>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#004c45",
                    height: "50px",
                    fontSize: "0.9em",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  Mehr zu uns & unserer Vision{" "}
                </Button>
              </Link>
            </Box>
            <Box style={isMatch ? { width: "100%" } : { width: "45%" }}>
              <img
                src="/assets/images/subwayPair.jpg"
                style={
                  isSmallScreen
                    ? { width: "100%", objectFit: "cover", borderRadius: "10px" }
                    : { height: "85vh", width: "100%", objectFit: "cover", borderRadius: "10px" }
                }
              ></img>
            </Box>
          </Box>
        </div>
        <div
          style={{
            backgroundImage: "url(/assets/images/wave.svg)",
            backgroundColor: "#f0956a",
            backgroundSize: "cover",
            minHeight: "200px",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        ></div>


        <div style={{ backgroundColor: "#95aba9", marginTop: "-5px" }}>
          <h4 style={{ margin: "0", padding: "0", color: "#004c45", fontWeight: "normal" }}>WARUM AUFKLÄRWERK?</h4>
          <h3 style={{ color: "white", fontWeight: "normal", marginTop: "0" }}>Wusstest du ...?</h3>
          <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-around",
              justifyContent: "space-around",
              marginTop: "50px",
            }}>

            <Paper className="container" sx={{boxShadow:'none',height:'400px',width:'250px',margin:'50px',backgroundColor:'#95aba9','&:hover > .card':{cursor:'pointer',transform:'rotateY(180deg)'}}}>
              <Box className="card" sx={{height:'100%',width:'100%',transition:'transform 800ms',position:'relative',transformStyle:'preserve-3d'}}>
                <Box className="front" sx={{height:'100%',width:'100%',position:'absolute',backfaceVisibility:'hidden'}}>
                  <img src="/assets/images/blm.jpg" style={{borderRadius:'10px',objectFit:'cover',width:'100%'}}></img>
                </Box>
                <Box className="back" sx={{height:'100%',width:'100%',backgroundColor:'#95aba9',position:'absolute',transform:'rotateY(180deg)',backfaceVisibility:'hidden',
             }} >
                <img src="/assets/images/blm.jpg" style={{borderRadius:'10px',filter:'blur(6px)',opacity:'.6',objectFit:'cover',width:'100%'}}></img>
                <p style={{color:'white',fontSize:'1.5em',fontWeight:'bolder',
                position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:'70%',wordBreak:'break-word'}}>
                  Dass die Zahl der Anfragen im Zusammenhang mit rassistischer Diskriminierung 2020 ein Drittel (33 Prozent) aller Anfragen ausmachte?
                </p></Box>

              </Box>
            </Paper>

            <Paper className="container" sx={{boxShadow:'none',height:'400px',width:'250px',margin:'50px',backgroundColor:'#95aba9','&:hover > .card':{cursor:'pointer',transform:'rotateY(180deg)'}}}>
              <Box className="card" sx={{height:'100%',width:'100%',transition:'transform 800ms',position:'relative',transformStyle:'preserve-3d'}}>
                <Box className="front" sx={{height:'100%',width:'100%',position:'absolute',backfaceVisibility:'hidden'}}>
                  <img src="/assets/images/equality.jpg" style={{borderRadius:'10px',objectFit:'cover',width:'100%'}}></img>
                </Box>
                <Box className="back" sx={{height:'100%',width:'100%',backgroundColor:'#95aba9',position:'absolute',transform:'rotateY(180deg)',backfaceVisibility:'hidden',
             }} >
                <img src="/assets/images/equality.jpg" style={{borderRadius:'10px',filter:'blur(6px)',opacity:'.6',objectFit:'cover',width:'100%'}}></img>
                <p style={{color:'white',fontSize:'1.5em',fontWeight:'bolder',
                position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:'70%',wordBreak:'break-word'}}>
                  Dass über 80 Prozent der Bevölkerung wissen, dass Homo- und Bisexuelle in Deutschland diskriminiert werden?
                </p></Box>

              </Box>
            </Paper>

            <Paper className="container" sx={{boxShadow:'none',height:'400px',width:'250px',margin:'50px',backgroundColor:'#95aba9','&:hover > .card':{cursor:'pointer',transform:'rotateY(180deg)'}}}>
              <Box className="card" sx={{height:'100%',width:'100%',transition:'transform 800ms',position:'relative',transformStyle:'preserve-3d'}}>
                <Box className="front" sx={{height:'100%',width:'100%',position:'absolute',backfaceVisibility:'hidden'}}>
                  <img src="/assets/images/blm.jpg" style={{borderRadius:'10px',objectFit:'cover',width:'100%'}}></img>
                </Box>
                <Box className="back" sx={{textAlign:'center',height:'100%',width:'100%',backgroundColor:'#95aba9',position:'absolute',transform:'rotateY(180deg)',backfaceVisibility:'hidden',
             }} >
                <img src="/assets/images/blm.jpg" style={{borderRadius:'10px',filter:'blur(6px)',opacity:'.6',objectFit:'cover',width:'100%'}}></img>
                <p style={{color:'white',fontSize:'1.5em',fontWeight:'bolder',
                position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:'70%',wordBreak:'break-word'}}>
Dass in Deutschland ein Fehlbedarf von 386.000 barrierefreier Wohnungen für Rollstuhlfahrer herrscht?                </p></Box>

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
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}
