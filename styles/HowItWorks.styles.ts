import { SxProps, Theme } from "@mui/material"
import React from "react"

interface Classes {
  smallerScreen: {
    titleContainer: SxProps<Theme>
    title: React.CSSProperties
    subTitle: React.CSSProperties
  }
  largerScreen: {
    titleContainer: SxProps<Theme>
    title: React.CSSProperties
    subTitle: React.CSSProperties
  }
  howItWorksCycle: React.CSSProperties
  sixStepsWrapper: SxProps<Theme>
  sixStepsOuterBox: SxProps<Theme>
  sixStepsTitle: React.CSSProperties
  sixStepsInnerBox: SxProps<Theme>
  endingQuestionBox: SxProps<Theme>
  endingQuestionLinkWord: React.CSSProperties
}

export const classes: Classes = {
  smallerScreen: {
    titleContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
    title: {
      fontSize: "1.6em",
      color: "#ff5100",
      padding: "30px 0px 0px 20px",
      margin: "0px 0px 20px 0px",
      textAlign: "left",
    },
    subTitle: { padding: "0px 0px 0px 20px", textAlign: "left" },
  },
  largerScreen: {
    titleContainer: { display: "flex", flexDirection: "column", alignItems: "start", gap: "0px" },
    title: { color: "#ff5100", padding: "20px 80px 20px 50px", margin: "0", textAlign: "left" },
    subTitle: { padding: "0 50px 0 50px", margin: "0", textAlign: "left" },
  },
  howItWorksCycle: { objectFit: "cover", width: "100%" },
  sixStepsWrapper: { paddingRight: "10%", paddingLeft: "10%" },
  sixStepsOuterBox: {
    backgroundColor: "#f0956a",
    paddingTop: "10px",
    borderRadius: "15px",
    width: "100%",
    textAlign: "left",
  },
  sixStepsTitle: { color: "white", fontSize: "2em", paddingLeft: "50px" },
  sixStepsInnerBox: { padding: "20px 10px 50px 10px", width: "100%", textAlign: "left", paddingLeft: "50px" },
  endingQuestionBox: {
    marginTop: "100px",
    backgroundColor: "#ff5100",
    borderRadius: "5% 95% 100% 0/50% 100% 0 50%",
    paddingTop: "15px",
    paddingLeft: "5%",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    color: "white",
  },
  endingQuestionLinkWord: { color: "black" },
}
