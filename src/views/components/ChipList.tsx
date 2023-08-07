import { Chip } from "@mui/material"
import React from "react"

interface ChipListProps {
  list: string[]
  title: string
}

const ChipList: React.FC<ChipListProps> = (props) => {
  const { title, list } = props

  return (
    <>
      <h6 style={{ marginBottom: "10px", marginTop: "30px" }}>{title}</h6>
      {list.map((tag, index) => {
        return (
          <Chip
            key={index}
            label={tag}
            sx={{ backgroundColor: "#397870", color: "white", marginRight: "10px", marginTop: "5px" }}
          ></Chip>
        )
      })}
    </>
  )
}

export default ChipList
