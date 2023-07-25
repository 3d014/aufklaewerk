import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import HandshakeIcon from "@mui/icons-material/Handshake"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { Styles } from "../offering-card/OfferingCards.styles"
import React from "react"
import { OfferDto } from "@/src/models/offer-dto"
import { useRouter } from "next/router"

interface OfferingCardProps {
  offer: OfferDto
}

const OfferingCard: React.FC<OfferingCardProps> = (props) => {
  const { offer } = props
  const router = useRouter()

  return (
    <Card sx={{ ...Styles.mainCard }} onClick={() => router.push(`/offering/${offer.id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          alt="dajba"
          src="/assets/images/diversityHands.jpg"
          sx={{ ...Styles.cardMedia }}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" noWrap>
            {offer.name}
          </Typography>

          <Typography gutterBottom variant="body2" height={"50px"} sx={{ ...Styles.descriptionTypography }}>
            {offer.carddescription}
          </Typography>
          <Box>
            <HandshakeIcon></HandshakeIcon> {offer.organame}
          </Box>
          <Box>
            <LocationOnIcon></LocationOnIcon> {offer.city}
          </Box>
          <Box sx={{ ...Styles.tagsBox }}>
            <Typography sx={{ ...Styles.tagsTypography }}>Tagsasdf</Typography>
            <Typography sx={{ ...Styles.tagsTypography }}>Tags</Typography>
          </Box>

          <Box>
            <Typography sx={{ ...Styles.tagsTypography }}>Type</Typography>
            <Typography sx={{ ...Styles.tagsTypography }}>Type</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default OfferingCard
