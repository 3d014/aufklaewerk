import { Button, Chip, Divider, Grid, SwipeableDrawer, TextareaAutosize, Typography } from "@mui/material"
import React, { useState } from "react"
import HandshakeIcon from "@mui/icons-material/Handshake"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EventIcon from "@mui/icons-material/Event"
import { useRouter } from "next/router"
import { OrganisationDto } from "@/src/models/organisation-dto"

interface OrganizationDetailsProps {
  organization: OrganisationDto
}

const OrganizationDetails: React.FC<OrganizationDetailsProps> = (props) => {
  const router = useRouter()
  const { organization } = props

  const setGoogleMapString = (): string => {
    let googleMapString = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc&q="
    if (organization.city != null) {
      googleMapString += organization.city.replace(" ", "+") + ","
    }

    if (organization.postcode != null) {
      googleMapString += organization.postcode.replace(" ", "+") + ","
    }

    if (organization.street != null) {
      googleMapString += organization.street.replace(" ", "+") + ","
    }

    if (organization.houseNumber != null) {
      googleMapString += organization.houseNumber.replace(" ", "+") + ","
    }

    return googleMapString
  }

  return (
    <Grid item container direction={"row"} sx={{ marginTop: "0" }}>
      <Grid item xs={6} sx={{ textAlign: "left" }}>
        <h5 style={{ marginTop: "0", marginBottom: "10px" }}>{organization?.name ?? ""}</h5>
        <Grid container direction={"row"}>
          <Grid
            item
            container
            direction={"column"}
            xs={6}
            sx={{ height: "130px" }}
            alignItems="flex-start"
            justifyContent="space-around"
          >
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <EmailIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.mailAdress}</span>
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <PhoneIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.houseNumber}</span>
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <HandshakeIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.websiteURL}</span>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            xs={6}
            sx={{ height: "130px" }}
            alignItems="flex-start"
            justifyContent="space-around"
          >
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <LocationOnIcon sx={{ color: "#FF5100" }} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "left",
                    flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.street}</span>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.houseNumber}</span>
                  </div>
                  <div>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.postcode}</span>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.city}</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ borderBottomWidth: 2, width: "100%", marginTop: "15px" }} />
        <Grid container direction={"row"}>
          <Grid item container xs={6} direction={"column"} alignItems="flex-start">
            <Grid item>
              <h6 style={{ marginBottom: "10px", marginTop: "30px" }}>Themenbereiche</h6>
              {organization.tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag.label}
                    sx={{ backgroundColor: "#397870", color: "white", marginRight: "10px", marginTop: "5px" }}
                  ></Chip>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <div style={{ padding: "20px" }}>
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
      <Grid item container direction={"row"}>
        <Grid xs={12} item container direction={"column"} alignItems="flex-start">
          <h6 style={{ marginTop: "30px", marginBottom: "10px" }}>Über die Organization</h6>
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
              {organization.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2, width: "100%", marginTop: "35px" }} />
      <Grid container direction={"row-reverse"} sx={{ paddingLeft: "30px" }}>
        <Grid item xs={6}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: "#FF5100",
              marginTop: "30px",
              ":hover": {
                bgcolor: "#FF5100",
                color: "white",
              },
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Zu den Angeboten
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OrganizationDetails
