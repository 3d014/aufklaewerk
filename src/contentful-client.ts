import { createClient } from "contentful"
import { OrganisationDto } from "@/src/models/organisation-dto"
import { MemberDto } from "@/src/models/member-dto"
import { OfferDto } from "@/src/models/offer-dto"

export const client = createClient({
  space: "clymkiuh3imz",
  accessToken: "chuh4vc1XCSiDDUcZGVdiZBi_pRhNh46Oq4xpBseWDs",
})

export const getItems = async <T>(url: string): Promise<T[]> => {
  const res = await client.getEntries({ content_type: url })

  const data = res.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    }
  }) as T[]

  return data
}

interface ContentfulApi {
  getMembers: () => Promise<MemberDto[]>
  getOrganisations: () => Promise<OrganisationDto[]>
  getOffers: () => Promise<OfferDto[]>
}

export const ContentfulService: ContentfulApi = {
  getMembers: () => getItems<MemberDto>("teamMember"),
  getOrganisations: () => getItems<OrganisationDto>("organisation"),
  getOffers: () => getItems<OfferDto>("angebot"),
}
