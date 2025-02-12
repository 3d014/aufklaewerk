import { SxProps, Theme } from "@mui/material"
import React from "react"

interface Classes {
  diversityHandImage: React.CSSProperties
  diversityHandTitle: React.CSSProperties
  smallerScreen: {
    soFunktioniertSection: React.CSSProperties
    soFunktioniert: React.CSSProperties
    uberAufklaeverkInner: React.CSSProperties
    uberAufklaeverkInfo: React.CSSProperties
    uberAufklaeverkInfoHeader: React.CSSProperties
    uberAufklaeverkTitle: React.CSSProperties
    subwayPairBox: React.CSSProperties
    subwayPairImage: React.CSSProperties
  }
  largerScreen: {
    soFunktioniertSection: React.CSSProperties
    soFunktioniert: React.CSSProperties
    uberAufklaeverkInner: React.CSSProperties
    uberAufklaeverkInfo: React.CSSProperties
    uberAufklaeverkInfoHeader: React.CSSProperties
    uberAufklaeverkTitle: React.CSSProperties
    subwayPairBox: React.CSSProperties
    subwayPairImage: React.CSSProperties
  }
  soFunktioniertHeader: React.CSSProperties
  soFunktioniertMap: React.CSSProperties
  soFunktioniertMapImage: React.CSSProperties
  soFunktioniertMapText: React.CSSProperties
  HelpContainer: React.CSSProperties
  help: React.CSSProperties
  helpQuestion: React.CSSProperties
  helpAnswer: React.CSSProperties
  helpArrow: React.CSSProperties
  moreInfoWrapper: React.CSSProperties
  moreInfo: React.CSSProperties
  curvedBorder: React.CSSProperties
  uberAufklaeverkOuterContainer: React.CSSProperties
  uberAufklaeverkText: React.CSSProperties
  uberAufklaeverkButton: React.CSSProperties
  wavyBackground: React.CSSProperties
  flipCardOuterContainer: React.CSSProperties
  flipCardHeader: React.CSSProperties
  flipCardQuestion: React.CSSProperties
  flipCardInnerContainer: React.CSSProperties
  flipCard: SxProps<Theme>
  flipCardContext: SxProps<Theme>
  flipCardFront: SxProps<Theme>
  flipCardFrontImage: React.CSSProperties
  flipCardBack: SxProps<Theme>
  flipCardBackImage: React.CSSProperties
  flipCardBackText: React.CSSProperties
}

export const classes: Classes = {
  diversityHandImage: { objectFit: "cover", zIndex: "-1" },
  diversityHandTitle: { color: "white", textAlign: "center" },
  smallerScreen: {
    soFunktioniertSection: { textAlign: "center" },
    soFunktioniert: { fontWeight: "normal", fontSize: "26px" },
    uberAufklaeverkInner: { display: "flex", flexDirection: "column-reverse", padding: "50px 50px 50px 50px" },
    uberAufklaeverkInfo: {
      padding: "20px 0px 20px 0px",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      borderRadius: "10px",
    },
    uberAufklaeverkInfoHeader: { color: "#ff5100", fontWeight: "normal", margin: "0" },
    uberAufklaeverkTitle: { padding: "0", margin: "0", color: "#004c45", fontSize: "30px" },
    subwayPairBox: { width: "100%" },
    subwayPairImage: { width: "100%", objectFit: "cover", borderRadius: "10px" },
  },
  largerScreen: {
    soFunktioniertSection: { textAlign: "left", margin: "50px 0 50px 100px" },
    soFunktioniert: { marginTop: "20px", fontWeight: "normal" },
    uberAufklaeverkInner: {
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      padding: "50px 100px 50px 100px",
      alignItems: "center",
    },
    uberAufklaeverkInfo: {
      borderRadius: "10px",
      padding: "20px 20px 20px 20px",
      width: "55%",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
    uberAufklaeverkInfoHeader: { color: "#ff5100", fontWeight: "normal", margin: "0" },
    uberAufklaeverkTitle: { padding: "0", margin: "0", color: "#004c45" },
    subwayPairBox: { width: "45%" },
    subwayPairImage: { height: "85vh", width: "100%", objectFit: "cover", borderRadius: "10px" },
  },
  soFunktioniertHeader: { color: "#004c45", textTransform: "uppercase" },
  soFunktioniertMap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  soFunktioniertMapImage: { objectFit: "cover", width: "100%", maxWidth: "500px" },
  soFunktioniertMapText: { fontWeight: "normal" },
  HelpContainer: { margin: "50px 0 50px 0" },
  help: { display: "flex", backgroundColor: "#95aba9", justifyContent: "center", alignItems: "center" },
  helpQuestion: { color: "white", fontWeight: "normal", margin: "0", padding: "5px" },
  helpAnswer: { color: "white", fontSize: "1.2em", padding: "5px" },
  helpArrow: { color: "white" },
  moreInfoWrapper: { display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" },
  moreInfo: { color: "#95aba9", fontSize: "1.7em", fontWeight: "normal" },
  curvedBorder: {
    minHeight: "100px",
    backgroundColor: "#f0956a",
    borderRadius: "100% 100% 0 0%",
    marginBottom: "-5px",
  },
  uberAufklaeverkOuterContainer: { backgroundColor: "#f0956a", marginBottom: "-5px" },
  uberAufklaeverkText: { padding: "10px", color: "#004c45" },
  uberAufklaeverkButton: {
    backgroundColor: "#004c45",
    height: "50px",
    fontSize: "0.9em",
    marginLeft: "10px",
    marginRight: "10px",
  },
  wavyBackground: {
    backgroundImage: "url(/assets/images/wave.svg)",
    backgroundColor: "#f0956a",
    backgroundSize: "cover",
    minHeight: "200px",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  flipCardOuterContainer: { backgroundColor: "#95aba9", marginTop: "-5px" },
  flipCardHeader: { margin: "0", padding: "0", color: "#004c45", fontWeight: "normal" },
  flipCardQuestion: { color: "white", fontWeight: "normal", marginTop: "0" },
  flipCardInnerContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "space-around",
    marginTop: "50px",
  },
  flipCard: {
    boxShadow: "none",
    height: "400px",
    width: "250px",
    margin: "50px",
    backgroundColor: "#95aba9",
    "&:hover > .card": { cursor: "pointer", transform: "rotateY(180deg)" },
  },
  flipCardContext: {
    height: "100%",
    width: "100%",
    transition: "transform 800ms",
    position: "relative",
    transformStyle: "preserve-3d",
  },
  flipCardFront: { height: "100%", width: "100%", position: "absolute", backfaceVisibility: "hidden" },
  flipCardFrontImage: { borderRadius: "10px", objectFit: "cover", width: "100%" },
  flipCardBack: {
    height: "100%",
    width: "100%",
    backgroundColor: "#95aba9",
    position: "absolute",
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
  },
  flipCardBackImage: { borderRadius: "10px", filter: "blur(6px)", opacity: ".6", objectFit: "cover", width: "100%" },
  flipCardBackText: {
    color: "white",
    fontSize: "1.5em",
    fontWeight: "bolder",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "70%",
    wordBreak: "break-word",
  },
}
