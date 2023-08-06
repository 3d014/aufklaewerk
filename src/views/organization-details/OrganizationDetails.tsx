import { Button, Chip, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import HandshakeIcon from "@mui/icons-material/Handshake"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { OrganisationDto } from "@/src/models/organisation-dto"

interface OrganizationDetailsProps {
  organization: OrganisationDto
}

const OrganizationDetails: React.FC<OrganizationDetailsProps> = (props) => {
  const { organization } = props
  const isMatch = useMediaQuery("(max-width:1050px)")

  const setGoogleMapString = (): string => {
    let googleMapString = `https://maps.google.com?q=${organization.location.lat},${organization.location.lon}&output=embed`

    return googleMapString
  }

  if (organization == null) {
    return <></>
  }

  return (
    <Grid
      item
      container
      direction={isMatch ? "column" : "row"}
      sx={{ marginTop: "0", padding: isMatch ? "10px" : "0px" }}
    >
      <Grid item xs={6} sx={{ textAlign: "left" }}>
        <h5 style={{ marginTop: "0", marginBottom: "10px" }}>{organization?.title ?? ""}</h5>
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
                <EmailIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.email}</span>
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
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>Home number</span>
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
                <HandshakeIcon sx={{ color: "#FF5100" }} />
                <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>{organization.website}</span>
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
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>street</span>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>house number</span>
                  </div>
                  <div>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>postcode</span>
                    <span style={{ paddingLeft: "10px", fontSize: "1rem" }}>city</span>
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
              <div>
                {organization.tags.map((tag, index) => {
                  return (
                    <Chip
                      key={index}
                      label={tag}
                      sx={{ backgroundColor: "#397870", color: "white", marginRight: "10px", marginTop: "5px" }}
                    ></Chip>
                  )
                })}
              </div>
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
              marginBottom: "10px",
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
