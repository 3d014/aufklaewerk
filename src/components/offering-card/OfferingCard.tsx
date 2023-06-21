import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import HandshakeIcon from "@mui/icons-material/Handshake"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { Styles } from "../offering-card/OfferingCards.styles"

const OfferingCard = () => {
  return (
    <Card sx={{ ...Styles.mainCard }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          alt="dajba"
          src="/assets/images/diversityHands.jpg"
          sx={{ ...Styles.cardMedia }}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Title
          </Typography>

          <Typography gutterBottom variant="body2" height={"50px"} sx={{ ...Styles.descriptionTypography }}>
            Hamburg aus einer anderen Perspektive erleben das ist bei StattTour möglich. Dieser Rollenwechsel lässt dich
            das maritime Hamburg im Rollstuhl erkunden und dich Barrieren begegnen, die für{" "}
          </Typography>
          <Box>
            <HandshakeIcon></HandshakeIcon> Organisation
          </Box>
          <Box>
            <LocationOnIcon></LocationOnIcon> Adress
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
