import { SxProps, Theme } from "@mui/material"
interface Classes {
  upperSectionContainer?: SxProps<Theme>
  smallerScreen?: {
    fistBumpImg: React.CSSProperties
    upperSectionTitle?: React.CSSProperties
    middleSectionTitle?: React.CSSProperties
  }
  largerScreen?: {
    fistBumpImg: React.CSSProperties
    upperSectionTitle?: React.CSSProperties
    middleSectionTitle?: React.CSSProperties
  }
  upperSectionText?: React.CSSProperties
  offererPathImg?: React.CSSProperties
  contactFormWrapper?: React.CSSProperties
}

export const classes: Classes = {
  smallerScreen: {
    fistBumpImg: {
      objectFit: "contain",
      width: "100%",
      borderRadius: "15px",
    },
    upperSectionTitle: {
      padding: "1vh 5px 1vh 5px",
      fontSize: "1.8rem",
      textAlign: "right",
      color: "#ff5100",
      fontWeight: "bold",
    },
    middleSectionTitle: { color: "#ff5100", fontSize: "1.5rem", fontWeight: "bold", margin: "25px 10px 25px 10px" },
  },

  largerScreen: {
    fistBumpImg: { objectFit: "cover", width: "100%", height: "100%", borderRadius: "15px " },
    upperSectionTitle: { fontWeight: "bold", color: "#ff5100", padding: "1vh 5px 1vh 5px", textAlign: "right" },
    middleSectionTitle: { color: "#ff5100", fontWeight: "bold", fontSize: "2.5rem", margin: "25px 10px 25px 10px" },
  },

  upperSectionContainer: { minHeight: "100vh", padding: "20px 20px 20px 20px" },
  upperSectionText: { textAlign: "right", marginLeft: "15px", color: "#004c45", whiteSpace: "pre-line" },
  offererPathImg: { marginTop: "100px", width: "100%", height: "100%" },
  contactFormWrapper: { marginBottom: "50px" },
}
