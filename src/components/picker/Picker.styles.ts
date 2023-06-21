export const Styles = {
  mainBox: {
    border: "2px solid white",
    borderRadius: "10px",
    width: "250px",
    background: "white",
    padding: "20px",
    rowGap: "5px",
    // marginBottom:'100px',
    "@media screen and (max-width:300px)": { width: "200px" },
  },
  autoComplete: {
    "& .MuiFormLabel-root, & .MuiInputLabel-root": { whiteSpace: "pre-wrap", lineHeight: "1em" },
  },
  slider: {
    "&.MuiSlider-root": { color: "grey" },
  },
  button: {
    width: "100%",

    background: "#FF5100",
  },
}
