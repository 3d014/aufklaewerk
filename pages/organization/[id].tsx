import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticPaths } from "next"
import React, { useEffect, useState } from "react"
import { Grid, useMediaQuery } from "@mui/material"
import { OrganisationDto } from "../../src/models/organisation-dto"
import { test_org } from "../../src/test-data"
import OrganizationDetails from "../../src/views/organization-details/OrganizationDetails"
import { client, ContentfulService } from "../../src/contentful-client"

const classes = {
  content: {
    width: "100%",
    minHeight: "100vh",
  },
}

const OrgDetails: React.FC = () => {
  const [organization, setOrganization] = useState<OrganisationDto | null>(test_org)
  const isMobile = useMediaQuery("(max-width:800px)")

  useEffect(() => {
    void (async () => {
      const result = await ContentfulService.getOffers()
      console.log(result)
    })()
  }, [])

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={{ ...classes.content, padding: isMobile ? "10px" : "35px" }}>
        <Organization Details organization={organization} />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  }
}

export default OrgDetails
