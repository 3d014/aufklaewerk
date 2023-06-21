export const Styles = {
  firstSectionBox: {
    display: "flex",
    position: "relative",
    width: "100vw",
    justifyContent: "center",

    boxSizing: "border-box",
  },

  firstSectionGridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
  },

  firstSectionSubtitleGrid: {
    display: "flex",
    fontSize: "40px",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width:400px)": { fontSize: "30px" },
  },
  pickerGrid: { display: "flex", justifyContent: "center", alignItems: "center" },

  secondSectionGridContainer: { rowGap: "0.5rem" },
  secondSectionGridItem: { display: "flex", justifyContent: "center", alignItems: "center" },

  thirdSectionGridContainer: {
    position: "relative",
    marginTop: "20px",
    padding: "10px",
    paddingLeft: "30px",
    height: "70vh",
    "@media screen and (max-width:600px)": { height: "40vh" },
  },
  thirdSectionImageGrid: { position: "relative", height: "100%" },
  thirdSectionListGrid: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  checkIcon: { color: "rgb(255, 81, 0)", marginRight: "5px" },
}
