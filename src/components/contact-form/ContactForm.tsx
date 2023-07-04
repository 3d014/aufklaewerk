import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material"
import Stack from "@mui/material/Stack"
import { ChangeEvent, useState } from "react"
import { classes } from "./ContactForm.styles"


export const ContactForm = () => {
  const isMatch = useMediaQuery("(max-width:640px)")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [message, setMessage] = useState("")
  const [formErrors, setFormErrors] = useState({
    nameError: false,
    emailError: false,
    organisationError: false,
    messageError: false,
  })
  const handleNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let updatedName = e.target.value
    setName(updatedName)
    setFormErrors((prevState) => ({ ...prevState, nameError: false }))
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let updatedEmail = e.target.value
    setEmail(updatedEmail)
    setFormErrors((prevState) => ({ ...prevState, emailError: false }))
  }

  const handleOrganisationChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let updatedOrganisation = e.target.value
    setOrganisation(updatedOrganisation)
    setFormErrors((prevState) => ({ ...prevState, organisationError: false }))
  }
  const handleMessageChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let updatedMessage = e.target.value
    setMessage(updatedMessage)
    setFormErrors((prevState) => ({ ...prevState, messageError: false }))
  }

  const handleSubmit = () => {
    if (name === "") {
      setFormErrors((prevState) => ({ ...prevState, nameError: true }))
    }
    if (email === "") {
      setFormErrors((prevState) => ({ ...prevState, emailError: true }))
    }
    if (organisation === "") {
      setFormErrors((prevState) => ({ ...prevState, organisationError: true }))
    }
    if (message === "") {
      setFormErrors((prevState) => ({ ...prevState, messageError: true }))
    }

    let hasErrors = Object.values(formErrors).some((error) => {
      return error === true
    })
    if (!hasErrors) {
      console.log("proceed submiting")
    }
  }

  return (
    <Box>
      <Stack sx={{ color: "#004c45", fontFamily: "Montserrat" }} spacing={2}>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          Möchten Sie...
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
            ...helfen?
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
            ...fragen?
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          ...oder einfach nur...
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          ...etwas Nettes sagen?
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormImperative : classes.largerScreen.contactFormImperative}>
          Kontaktieren Sie Uns!!
        </Typography>
      </Stack>

      <div
        style={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "30px" }}
      >
        <TextField
          type="text"
          id="name"
          variant="standard"
          label="Name"
          required
          error={formErrors.nameError}
          helperText={formErrors.nameError ? "Name is required" : ""}
          value={name}
          onChange={handleNameChange}
          sx={{ width: "70%" }}
        ></TextField>

        <TextField
          type="text"
          id="email"
          variant="standard"
          label="E-mail"
          required
          error={formErrors.emailError}
          value={email}
          onChange={handleEmailChange}
          helperText={formErrors.emailError ? "E-mail is required" : ""}
          sx={{ width: "70%" }}
        ></TextField>

        <TextField
          type="text"
          id="organisation"
          variant="standard"
          label="Organisation"
          required
          error={formErrors.organisationError}
          value={organisation}
          onChange={handleOrganisationChange}
          helperText={formErrors.organisationError ? "Organisation is required" : ""}
          sx={{ width: "70%" }}
        ></TextField>
      </div>
      <div style={{ marginTop: "50px" }}>
        <TextField
          type="text"
          id="standasadfrd-1basic"
          variant="standard"
          multiline
          required
          error={formErrors.messageError}
          value={message}
          onChange={handleMessageChange}
          placeholder="Bitte geben Sie hier Ihre Nachricht ein"
          sx={{ width: "70%" }}
          inputProps={{ sx: { minHeight: "200px" } }}
          helperText={formErrors.messageError ? "Message is required" : ""}
        ></TextField>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" sx={{ backgroundColor: "#004c45" }} onClick={handleSubmit}>
          Abschicken
        </Button>
      </div>
    </Box>
  )
}
