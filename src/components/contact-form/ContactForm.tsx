import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material"
import Stack from "@mui/material/Stack"
import { ChangeEvent, useState } from "react"
import { classes } from "./ContactForm.styles"
import { useTranslation } from "next-i18next"
import React from "react"

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
    name: false,
    email: false,
    organisation: false,
    message: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevState) => ({ ...prevState, [id]: value }))
    setFormErrors((prevState) => ({ ...prevState, [id]: false }))
  }

  const handleSubmit = () => {
    const updatedFormErrors = {
      ...formErrors,
    }

    let hasError = false
    for (const [key, value] of Object.entries(formData)) {
      if (value === "") {
        updatedFormErrors[key as keyof FormData] = true
        hasError = true
      }
    }

    setFormErrors(updatedFormErrors)
    if (!hasError) {
      console.log("success")
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
            error={formErrors.name}
            helperText={
              formErrors.name ? "Name is required" : <span style={{ float: "right" }}>{formData.name.length}/40 </span>
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
            error={formErrors.email}
            value={formData.email}
            onChange={handleChange}
            helperText={formErrors.email ? "E-mail is required" : ""}
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
            error={formErrors.organisation}
            value={formData.organisation}
            onChange={handleChange}
            helperText={formErrors.organisation ? "Organisation is required" : ""}
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
          error={formErrors.message}
          value={formData.message}
          onChange={handleChange}
          placeholder="Bitte geben Sie hier Ihre Nachricht ein"
          sx={classes.formInputs}
          inputProps={{ sx: { minHeight: "200px" } }}
          helperText={formErrors.message ? "Message is required" : ""}
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
