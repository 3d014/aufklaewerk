import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPaths} from "next";
import React, {useEffect, useState} from "react";
import {Grid, useMediaQuery} from "@mui/material";
import {OrganizationDto} from "../../src/models/organization-dto";
import {test_org} from "../../src/test-data";
import OrganizationDetails from "../../src/views/organization-details/OrganizationDetails";

const classes = {
  content: {
    width: "100%",
    minHeight: "100vh",
  },
}

const OrgDetails: React.FC = () => {
  const [organization, setOrganization] = useState<OrganizationDto | null>(null)
  const isMobile = useMediaQuery("(max-width:800px)")

  useEffect(() => {
    void (async () => {
      // api call to fetch details at some point
    })()

    const orga = test_org
    setOrganization(orga)
  },[])

  if (organization == null) {
    return <></>
  }

  return (
      <Grid direction="row" alignItems="center" justifyContent="center" container>
             <Grid item sx={{ ...classes.content, padding: isMobile ? "10px" : "35px" }}>
               <OrganizationDetails organization={organization} />
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
    fallback: 'blocking' //indicates the type of fallback
  }
}

export default OrgDetails