import { useMediaQuery } from "@mui/material"
import React from "react"

interface IconLabelProps {
  icon: React.ReactElement
  label: string
}

const IconLabel: React.FC<IconLabelProps> = (props) => {
  const { icon, label } = props
  const isMatch = useMediaQuery("(max-width:1050px)")

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        marginTop: isMatch ? "5px" : "0px",
      }}
    >
      {icon}
      <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{label}</span>
    </div>
  )
}

export default IconLabel
