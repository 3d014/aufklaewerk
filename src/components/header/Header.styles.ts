export const styles = {
  tabStyle: {
    textTransform: "none",
    fontSize: "20px",
    fontFamily: "Georgia,serif",
    color: "#F0956A",
    fontWeight: "bold",
    "&.Mui-selected": {
      textDecoration: "none",
      color: "#ff5100",
      borderRadius: "30px",
      background: "#304a39",
    },
  },
  appBarStyle: {
    height: "56px",
    fontFamily: "Georgia,serif",
    color: "#f79163",
    background: "#045344",
    button: {
      "&:hover": {
        background: "#44634e",
        transition: "none",
      },
      "&.Mui-selected": { background: "#304a39", borderRadius: 0 },
      "&:focus": { background: "#304a39", transition: "none", color: "#ff5100" },
    },
  },
  tabsStyle: {
    marginLeft: "auto",
    fontFamily: "Georgia,serif",
  },
  typographyStyle: {
    fontWeight: "bolder",
    fontFamily: "Lato,sans-serif",
    fontSize: "36px",
    color: "#ff5100",
  },
}
