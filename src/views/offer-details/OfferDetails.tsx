import { OfferDto } from "@/src/models/offer-dto"
import { Button, Chip, Divider, Grid, SwipeableDrawer, Typography, useMediaQuery } from "@mui/material"
import React, { useState } from "react"
import HandshakeIcon from "@mui/icons-material/Handshake"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import EventIcon from "@mui/icons-material/Event"
import { useRouter } from "next/router"
import CloseIcon from "@mui/icons-material/Close"

interface OfferDetailsProps {
  offer: OfferDto
}

const OfferDetails: React.FC<OfferDetailsProps> = (props) => {
  const router = useRouter()
  const [offerDetailsOpen, setOfferDetailsOpen] = useState<boolean>(false)
  const isMatch = useMediaQuery("(max-width:1050px)")
  const { offer } = props

  const setGoogleMapString = (): string => {
    let googleMapString = `https://maps.google.com?q=${offer.location.lat},${offer.location.lon}&output=embed`

    return googleMapString
  }

  return (
    <Grid item container direction={isMatch ? "column" : "row"} sx={{ marginTop: "0" }}>
      <Grid item xs={6} sx={{ textAlign: "left" }}>
        <h5 style={{ marginTop: "0", marginBottom: "10px" }}>{offer.title}</h5>
        <Grid container direction={isMatch ? "column" : "row"}>
          <Grid
            item
            container
            direction={"column"}
            xs={6}
            sx={{ height: "130px", paddingLeft: isMatch ? "15px" : "0px" }}
            alignItems="flex-start"
            justifyContent="space-around"
          >
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  marginTop: isMatch ? "5px" : "0px",
                }}
              >
                <HandshakeIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{offer.organisation.title}</span>
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  marginTop: isMatch ? "5px" : "0px",
                }}
              >
                <EmailIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{offer.email}</span>
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  marginTop: isMatch ? "5px" : "0px",
                }}
              >
                <PhoneIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{offer.phone}</span>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            xs={6}
            sx={{ height: "130px", paddingLeft: "15px" }}
            alignItems="flex-start"
            justifyContent="space-around"
          >
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  marginTop: isMatch ? "5px" : "0px",
                }}
              >
                <LocationOnIcon sx={{ color: "#FF5100" }} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "left",
                    flexWrap: "nowrap",
                    flexDirection: "column",
                    marginTop: isMatch ? "5px" : "0px",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org street</span>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org house name</span>
                  </div>
                  <div>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org post code</span>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>org city</span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  marginTop: isMatch ? "5px" : "0px",
                }}
              >
                <LocalOfferIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{offer.price}</span>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ borderBottomWidth: 2, width: "100%", marginTop: "15px" }} />
        <Grid container direction={"row"}>
          <Grid item container xs={6} direction={"column"} alignItems="flex-start">
            <Grid item>
              <h6 style={{ marginBottom: "10px", marginTop: "30px" }}>Themenbereiche</h6>
              {offer.tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{ backgroundColor: "#397870", color: "white", marginRight: "10px", marginTop: "5px" }}
                  ></Chip>
                )
              })}
            </Grid>
          </Grid>
          <Grid item container xs={6} direction={"column"} alignItems="flex-start">
            <Grid item>
              <h6 style={{ marginBottom: "10px", marginTop: "30px" }}>Angebotstypen</h6>
              {offer.offeringType.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{ backgroundColor: "#397870", color: "white", marginRight: "10px", marginTop: "5px" }}
                  ></Chip>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <div style={{ padding: isMatch ? "0px" : "20px", marginTop: isMatch ? "30px" : "0px" }}>
          <iframe
            src={setGoogleMapString()}
            width="100%"
            height="300"
            style={{ borderRadius: "10px", border: "0", height: "300px" }}
            loading="lazy"
          ></iframe>
        </div>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2, width: "100%", marginTop: "15px" }} />
      <Grid item container direction={isMatch ? "column" : "row"} sx={{ padding: isMatch ? "15px" : "0px" }}>
        <Grid xs={6} item container direction={"column"} alignItems="flex-start">
          <h6 style={{ marginTop: "30px", marginBottom: "10px" }}>Über das Angebot</h6>
          <div style={{ height: "200px", overflow: "hidden" }}>
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 8,
                fontSize: "16px",
                fontFamily: "Lato, sans-serif",
              }}
              align={"left"}
            >
              {offer.description}
            </Typography>
          </div>
          <span
            style={{ fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setOfferDetailsOpen(true)}
          >
            Mehr anzeigen
          </span>
          <SwipeableDrawer
            anchor={"bottom"}
            open={offerDetailsOpen}
            onOpen={() => setOfferDetailsOpen(true)}
            onClose={() => setOfferDetailsOpen(false)}
          >
            <Grid sx={{ minHeight: "100vh", padding: "15px", overflowY: "scroll" }} direction={"column"} container>
              <Grid item container direction={"row"} justifyContent="space-between" alignItems="start">
                <Grid item>
                  <h5 style={{ margin: "0" }}>Über das Angebot</h5>
                </Grid>
                <Grid item>
                  <CloseIcon
                    sx={{ fontSize: "36px", marginTop: "0", cursor: "pointer" }}
                    onClick={() => setOfferDetailsOpen(false)}
                  />
                </Grid>
                <Grid item>
                  <p
                    style={{
                      textAlign: "left",
                      whiteSpace: "pre-line",
                      fontFamily: "Lato,sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    {offer.description}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </SwipeableDrawer>
        </Grid>
        <Grid
          xs={6}
          item
          container
          direction={"column"}
          alignItems="flex-start"
          sx={{ paddingLeft: isMatch ? "0px" : "20px" }}
        >
          <h6 style={{ marginTop: "30px", marginBottom: "10px" }}>Über die Organisation</h6>
          <div style={{ height: "200px", overflow: "hidden" }}>
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 8,
                fontSize: "16px",
                fontFamily: "Lato, sans-serif",
              }}
              align={"left"}
            >
              {offer.shortdescription}
            </Typography>
          </div>
          <span
            style={{ fontWeight: "600", textDecoration: "underline", cursor: "pointer" }}
            onClick={() => router.push(`/organization/${offer.organisation.id}`)}
          >
            Mehr zur Organisation
          </span>
        </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2, width: "100%", marginTop: "35px" }} />
      <Grid container direction={"row-reverse"} sx={{ paddingLeft: "30px" }}>
        <Grid item xs={6}>
          <Button
            startIcon={<EventIcon />}
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: "#FF5100",
              marginTop: "30px",
              marginBottom: "10px",
              ":hover": {
                bgcolor: "#FF5100",
                color: "white",
              },
            }}
            onClick={() => router.push("/contact")}
          >
            Angebot buchen
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OfferDetails
