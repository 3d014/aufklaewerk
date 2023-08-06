import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticPaths } from "next"
import React, { useEffect, useState } from "react"
import { Grid, useMediaQuery } from "@mui/material"
import { OrganisationDto } from "../../src/models/organisation-dto"
import OrganizationDetails from "../../src/views/organization-details/OrganizationDetails"
import { createClient } from "contentful"
import { ContentfulService } from "../../src/contentful-client"
import { useRouter } from "next/router"

const classes = {
  content: {
    width: "100%",
    minHeight: "100vh",
  },
}

interface OrgDetailsProps {
  organisations: OrganisationDto[]
}

const OrgDetails: React.FC = ({ organisations }: OrgDetailsProps) => {
  const router = useRouter()
  const isMobile = useMediaQuery("(max-width:800px)")
  const [organisation, setOrganisation] = useState<OrganisationDto | null>(null)

  useEffect(() => {
    const organisation = organisations.find((org) => org.id === router.query.id)
    setOrganisation(organisation)
  }, [])

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" container>
      <Grid item sx={{ ...classes.content, padding: isMobile ? "10px" : "35px" }}>
        <OrganizationDetails organization={organisation} />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps({ locale }) {
  const _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const service = new ContentfulService(_client)
  const organisations = await service.getOrganisations()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      organisations,
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
