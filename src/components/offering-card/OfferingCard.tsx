import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material"
import HandshakeIcon from "@mui/icons-material/Handshake"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { classes } from "../offering-card/OfferingCards.styles"
import React, { useEffect, useState } from "react"
import { OfferDto } from "@/src/models/offer-dto"
import { useRouter } from "next/router"
import { OrganisationDto } from "@/src/models/organisation-dto"
import { ContentfulService } from "@/src/contentful-client"

interface OfferingCardProps {
  offer: OfferDto
}

const OfferingCard: React.FC<OfferingCardProps> = (props) => {
  const { offer } = props
  const router = useRouter()
  const isMatch = useMediaQuery("(max-width:440px)")
  const [organisation, setOrganisation] = useState<OrganisationDto | null>(null)

  const MAX_DISPLAY_TAGS = 3
  const MAX_DISPLAY_TYPES = 3

  const displayedTags = offer.tags.slice(0, MAX_DISPLAY_TAGS)
  const displayedTypes = offer.offeringType.slice(0, MAX_DISPLAY_TYPES)

  return (
    <Card
      sx={isMatch ? classes.smallerScreen.card : classes.largerScreen}
      onClick={() => router.push(`/offering/${offer.id}`)}
    >
      <CardActionArea>
        <CardMedia component="img" height="200" alt={offer.title} src={offer.images[0].url}></CardMedia>
        <CardContent>
          <Box sx={classes.cardTitle}>
            <Typography variant="h5" component="div" sx={classes.offerName}>
              {offer.title}
            </Typography>
          </Box>
          <Typography gutterBottom variant="body1" component="div" sx={classes.cardDescription}>
            {offer.description}
          </Typography>

          <Box sx={classes.addresContainer}>
            <Box sx={{ ...classes.iconContainer }}>
              <Box sx={{ ...classes.iconInnerContainer }}>
                <HandshakeIcon sx={{ ...classes.icon }}></HandshakeIcon> {organisation?.title}
              </Box>
              <Box sx={{ ...classes.iconInnerContainer }}>
                <LocationOnIcon sx={{ ...classes.icon }}></LocationOnIcon> {organisation?.city}
              </Box>
            </Box>
          </Box>

          <Box sx={classes.tagsContainer}>
            {displayedTags.map((tag, index) => (
              <Chip key={`tag-${index}`} label={tag} sx={classes.chip} />
            ))}
            {displayedTypes.map((type, index) => (
              <Chip key={`type-${index}`} label={type} sx={classes.chip} />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default OfferingCard
