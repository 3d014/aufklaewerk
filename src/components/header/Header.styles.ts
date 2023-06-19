

export const styles = {
  tabStyle: {
    textTransform: "none",
    fontSize: "24px",
    fontFamily: "Georgia,serif",
    color: "#F0956A",
    margin: 0,
    fontWeight: "bold",
    "&.Mui-selected": {
      textDecoration: "none",
      color: "#ff5100",
      borderRadius: "30px",
      background: "#304a39",
    },
  },
  appBarStyle: {
    height: "64px",
    fontFamily: "Georgia,serif",
    color: "#f79163",
    background: "#004c45",
    button: {
      height: "64px",
      "&:hover": {
        background: "#44634e",
        transition: "none",
      },
      "&.Mui-selected": { background: "#304a39", borderRadius: 0 },
      // "&:focus": { background: "#304a39", transition: "none", color: "#ff5100" },
    },
  },
  tabsStyle: {
    height: "64px",
    marginLeft: "auto",
    fontFamily: "Georgia,serif",
  },
  typographyStyle: {
  fontWeight: "bolder",
  fontFamily: "Lato,sans-serif",
  fontSize: "36px",
  color: "#ff5100",
  // marginBottom: "10px",
  },
}
