import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography, useMediaQuery } from "@mui/material"
import HandshakeIcon from "@mui/icons-material/Handshake"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { classes } from "../offering-card/OfferingCards.styles"
import React from "react"
import { OfferDto } from "@/src/models/offer-dto"
import { useRouter } from "next/router"

interface OfferingCardProps {
  offer: OfferDto
}

const OfferingCard: React.FC<OfferingCardProps> = (props) => {
  const { offer } = props
  const router = useRouter()

  const isMatch = useMediaQuery("(max-width:440px)")

  const MAX_DISPLAY_TAGS=3
  const MAX_DISPLAY_TYPES=3

  const displayedTags = offer.tags.slice(0, MAX_DISPLAY_TAGS)
  const remainingTags = offer.tags.slice(MAX_DISPLAY_TAGS)

  const displayedTypes = offer.offeringTypes.slice(0, MAX_DISPLAY_TYPES);
  const remainingTypes = offer.offeringTypes.slice(MAX_DISPLAY_TYPES);


  return (
   <Card sx={isMatch?classes.smallerScreen.card:classes.largerScreen}>
    <CardActionArea onClick={() => router.push(`/offering/${offer.id}`)}>
      <CardMedia component="img" height="200" alt={offer.name} src={offer.imageUrls[0]}></CardMedia>

      <CardContent>
        <Box sx={classes.cardTitle}>   
             <Typography  variant="h5" component="div" sx={classes.offerName}>
                {offer.name}
              </Typography>
        </Box>
        <Typography gutterBottom variant="body1" component="div" sx={classes.cardDescription}>
          {offer.description}
        </Typography>

        <Box sx={classes.addresContainer}>
          <Box sx={{...classes.iconContainer}}>
          <Box sx={{...classes.iconInnerContainer}}><HandshakeIcon sx={{...classes.icon}}></HandshakeIcon> {offer.organame}</Box>
          <Box sx={{...classes.iconInnerContainer}}><LocationOnIcon sx={{...classes.icon}}></LocationOnIcon> {offer.city}</Box>
          </Box>  
        </Box>

        <Box sx={classes.tagsContainer}>
          {displayedTags.map((tag, index) => (
              <Chip key={`tag-${index}`} label={tag.label} sx={classes.chip} />
            ))}
            {displayedTypes.map((type,index) => (
            <Chip key={`type-${index}`} label={type.label} sx={classes.chip} />
          ))}


        </Box>

       
      </CardContent>
    </CardActionArea>
   </Card>
  )

}

export default OfferingCard
