import { SxProps, Theme } from "@mui/material"
import React from "react"

interface Classes {
  diversityHandsContainer: SxProps<Theme>
  diversityHandsContent: SxProps<Theme>
  diversityHandsContentTitleWrapper: SxProps<Theme>
  diversityHandsContentTitle: React.CSSProperties
  pickerContainer: SxProps<Theme>
  searchCardsContainer: SxProps<Theme>
  cardWrapper: SxProps<Theme>
  checkIcon: SxProps<Theme>
  diversityHandsImage: React.CSSProperties
  searcherProccessImage: React.CSSProperties
  searcherReasonsContainer: React.CSSProperties
}

export const classes: Classes = {
  diversityHandsContainer: {
    display: "flex",
    position: "relative",
    width: "100vw",
    justifyContent: "center",

    boxSizing: "border-box",
  },

  diversityHandsContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
  },

  diversityHandsContentTitleWrapper: {
    display: "flex",
    fontSize: "40px",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width:400px)": { fontSize: "30px" },
  },

  diversityHandsContentTitle: { color: "white", textAlign: "center" },
  pickerContainer: { display: "flex", justifyContent: "center", alignItems: "center" },

  searchCardsContainer: { rowGap: "0.5rem" },
  cardWrapper: { display: "flex", justifyContent: "center", alignItems: "center" },

  checkIcon: { color: "rgb(255, 81, 0)", marginRight: "5px" },
  diversityHandsImage: { objectFit: "cover", zIndex: "-1" },
  searcherProccessImage: { objectFit: "cover", width: "100%", height: "100%" },
  searcherReasonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}
