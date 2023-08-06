import Carousel from "react-material-ui-carousel"
import React from "react"
import { useMediaQuery } from "@mui/material"

const classes = {
  desktopFrame: {
    overflow: "hidden",
  },
  desktopImg: {
    width: "100%",
    height: "100%",
  },
}

interface ImageCarouselProps {
  imageUrls: string[]
}
const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
  const { imageUrls } = props
  const isMobile = useMediaQuery("(max-width:800px)")

  return (
    <Carousel
      indicators={true}
      sx={{
        borderRadius: "10px",
        width: "100%",
      }}
    >
      {imageUrls.map((url, index) => {
        return (
          <div
            key={index}
            style={{
              ...classes.desktopFrame,
              height: isMobile ? "300px" : "600px",
            }}
          >
            <img
              src={url}
              alt={"alternate text"}
              style={{
                ...classes.desktopImg,
                height: isMobile ? "300px" : "1000px",
                objectFit: isMobile ? "contain" : "cover",
              }}
            />
          </div>
        )
      })}
    </Carousel>
  )
}

export default ImageCarousel
