import { Button, Chip, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import HandshakeIcon from "@mui/icons-material/Handshake"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { OrganisationDto } from "@/src/models/organisation-dto"
import IconLabel from "@/src/views/components/IconLabel"
import LocationItem from "@/src/views/components/LocationItem"
import ChipList from "@/src/views/components/ChipList"
import { useTranslation } from "next-i18next"

interface OrganizationDetailsProps {
  organization: OrganisationDto
}

const classes = {
  orgDescription: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 8,
    fontSize: "16px",
    fontFamily: "Lato, sans-serif",
  },
  button: {
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
  },
}

const OrganizationDetails: React.FC<OrganizationDetailsProps> = (props) => {
  const { organization } = props
  const isMatch = useMediaQuery("(max-width:1050px)")
  const { t } = useTranslation("offerDetails")

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
              <IconLabel icon={<EmailIcon sx={{ color: "#FF5100" }} />} label={organization.email} />
            </Grid>
            <Grid item>
              <IconLabel icon={<PhoneIcon sx={{ color: "#FF5100" }} />} label={"Home number"} />
            </Grid>
            <Grid item>
              <IconLabel icon={<HandshakeIcon sx={{ color: "#FF5100" }} />} label={organization.website} />
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
              <LocationItem />
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ borderBottomWidth: 2, width: "100%", marginTop: "15px" }} />
        <Grid container direction={"row"}>
          <Grid item container xs={12} direction={"column"} alignItems="flex-start">
            <Grid item>
              <ChipList list={organization.tags} title={t("themes")} />
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
            <Typography sx={classes.orgDescription} align={"left"}>
              {organization.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2, width: "100%", marginTop: "35px" }} />
      <Grid container direction={"row-reverse"} sx={{ paddingLeft: "30px" }}>
        <Grid item xs={6}>
          <Button sx={classes.button}>Zu den Angeboten</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OrganizationDetails
