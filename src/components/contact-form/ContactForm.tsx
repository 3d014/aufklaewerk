import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material"
import Stack from "@mui/material/Stack"
import { ChangeEvent, useState } from "react"
import { classes } from "./ContactForm.styles"
import { useTranslation } from "next-i18next"

interface FormData {
  name: string
  email: string
  organisation: string
  message: string
}

const initalFormData = {
  name: "",
  email: "",
  organisation: "",
  message: "",
}

export const ContactForm = () => {
  const { t } = useTranslation(["contact"])
  const isMatch = useMediaQuery("(max-width:640px)")
  const [formData, setFormData] = useState<FormData>(initalFormData)
  const [formErrors, setFormErrors] = useState({
    nameError: false,
    emailError: false,
    organisationError: false,
    messageError: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevState) => ({ ...prevState, [id]: value }))
    setFormErrors((prevState) => ({ ...prevState, [`${id}Error`]: false }))
  }

  const handleSubmit = () => {
    const { name, email, organisation, message } = formData
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
      <Stack sx={{ ...classes.contactFormTextContainer }} spacing={2}>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          {t("contactFormText1")}
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          {t("contactFormText2")}
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          {t("contactFormText3")}
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          {t("contactFormText4")}
        </Typography>
        <Typography sx={isMatch ? classes.smallerScreen.contactFormText : classes.largerScreen.contactFormText}>
          {t("contactFormText5")}
        </Typography>
        <Typography
          sx={isMatch ? classes.smallerScreen.contactFormImperative : classes.largerScreen.contactFormImperative}
        >
          {t("contactFormTextImperative")}
        </Typography>
      </Stack>

      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ height: "90px", width: "100%" }}>
          <TextField
            type="text"
            id="name"
            variant="standard"
            label="Name"
            required
            error={formErrors.nameError}
            helperText={
              formErrors.nameError ? (
                "Name is required"
              ) : (
                <span style={{ float: "right" }}>{formData.name.length}/40 </span>
              )
            }
            inputProps={{ maxLength: 40 }}
            value={formData.name}
            onChange={handleChange}
            sx={classes.formInputs}
          ></TextField>
        </div>
        <div style={{ height: "90px", width: "100%" }}>
          <TextField
            type="text"
            id="email"
            variant="standard"
            label="E-mail"
            required
            error={formErrors.emailError}
            value={formData.email}
            onChange={handleChange}
            helperText={formErrors.emailError ? "E-mail is required" : ""}
            sx={classes.formInputs}
          ></TextField>
        </div>
        <div style={{ height: "90px", width: "100%" }}>
          <TextField
            type="text"
            id="organisation"
            variant="standard"
            label="Organisation"
            required
            error={formErrors.organisationError}
            value={formData.organisation}
            onChange={handleChange}
            helperText={formErrors.organisationError ? "Organisation is required" : ""}
            sx={classes.formInputs}
          ></TextField>
        </div>
      </div>
      <div style={{ marginTop: "50px", minHeight: "250px" }}>
        <TextField
          type="text"
          id="message"
          variant="standard"
          multiline
          required
          error={formErrors.messageError}
          value={formData.message}
          onChange={handleChange}
          placeholder="Bitte geben Sie hier Ihre Nachricht ein"
          sx={classes.formInputs}
          inputProps={{ sx: { minHeight: "200px" } }}
          helperText={formErrors.messageError ? "Message is required" : ""}
        ></TextField>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" sx={classes.submitButton} onClick={handleSubmit}>
          Abschicken
        </Button>
      </div>
    </Box>
  )
}
