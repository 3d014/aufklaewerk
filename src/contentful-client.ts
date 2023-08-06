import { ContentfulClientApi } from "contentful"
import { OrganisationDto } from "@/src/models/organisation-dto"
import { MemberDto } from "@/src/models/member-dto"
import { OfferDto } from "@/src/models/offer-dto"

export class ContentfulService {
  private readonly _contentfulClient

  constructor(client: ContentfulClientApi<any>) {
    this._contentfulClient = client
  }

  async getItems<T>(url: string): Promise<T[]> {
    const res = await this._contentfulClient.getEntries({ content_type: url })

    const data = res.items.map((item) => {
      return {
        ...item.fields,
        id: item.sys.id,
      }
    }) as T[]

    return data
  }

  async getMembers(): Promise<MemberDto[]> {
    const res = await this._contentfulClient.getEntries({ content_type: "teamMember" })

    const data = res.items.map((item) => {
      return {
        ...item.fields,
        id: item.sys.id,
        imageUrl: item.fields.bild.fields.file.url,
      }
    }) as MemberDto[]

    return data
  }

  async getOrganisations(): Promise<OrganisationDto[]> {
    return this.getItems<OrganisationDto>("organisation")
  }

  async getOffers(): Promise<OfferDto[]> {
    const res = await this._contentfulClient.getEntries({ content_type: "angebot" })

    const data = res.items.map((item) => {
      return {
        ...item.fields,
        id: item.sys.id,
        organisation: {
          ...(item.fields.organisation?.fields ?? null),
          id: item.fields.organisation?.sys.id ?? null,
        },
      }
    }) as OfferDto[]

    return data
  }
}
