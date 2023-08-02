
import { SxProps, Theme } from "@mui/material";
import React from "react";


interface Classes{
  mainBox:SxProps<Theme>,
  autoComplete:SxProps<Theme>,
  slider:SxProps<Theme>,
  button:SxProps<Theme>,
  chip:SxProps<Theme>,
  cityChip:SxProps<Theme>,
  checkbox:React.CSSProperties,
  optionText:React.CSSProperties

}

export const classes:Classes = {
  mainBox: {
    border: "2px solid white",
    borderRadius: "10px",
    width: "250px",
    background: "white",
    paddingRight: "1rem",
    paddingBottom: "20px",
    // rowGap: "5px",
    // marginBottom:'100px',
    "@media screen and (max-width:300px)": { width: "270px", margin: "0 5px 0 5px" },
  },
  autoComplete: {
    "& .MuiFormLabel-root, & .MuiInputLabel-root": { whiteSpace: "pre-wrap", lineHeight: "1em" },
    "& .MuiAutocomplete-listbox": { height: '200px' }
  },
  slider: {
    "&.MuiSlider-root": { color: "grey" },
  },
  button: {
    width: "100%",

    background: "#FF5100",
  },
  chip: {
    maxWidth: "50%",
    backgroundColor: "#e0e0e0",
  },
  cityChip: {
    maxWidth: "80%",
    backgroundColor: "#e0e0e0",
  },
  checkbox:{ marginRight: 8,color:'#004c45' },
  optionText:{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}
}
