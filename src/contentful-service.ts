import { ContentfulClientApi } from "contentful"
import { OrganisationDto } from "@/src/models/organisation-dto"
import { MemberDto } from "@/src/models/member-dto"
import { OfferDto } from "@/src/models/offer-dto"
import FaqPage from "@/src/models/faq-page"
import { ContactPage } from "@/src/models/contact-page"
import Offerer from "@/pages/offerer"
import OffererPage from "@/src/models/offerrer-page"
import { AboutUsPage } from "@/src/models/about-us"
import { CallToAction, LandingPage, UeberAkw } from "@/src/models/landing-page"

interface Picture {
  fields: {
    file: {
      url: string
    }
  }
}

const getImgUrlFromObj = (obj: Picture): string => {
  return obj.fields.file.url
}

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
      const image = item.fields.bild as Picture

      return {
        ...item.fields,
        id: item.sys.id,
        imageUrl: getImgUrlFromObj(image),
      } as MemberDto
    }) as MemberDto[]

    return data
  }

  async getOrganisations(): Promise<OrganisationDto[]> {
    return this.getItems<OrganisationDto>("organisation")
  }

  async getOffers(): Promise<OfferDto[]> {
    const res = await this._contentfulClient.getEntries({ content_type: "angebot" })

    const data = res.items.map((item) => {
      const organisation = item.fields.organisation as { fields: {}; sys: { id: string } }

      return {
        ...item.fields,
        id: item.sys.id,
        organisation: {
          ...(organisation?.fields ?? null),
          id: organisation?.sys.id ?? null,
        },
      }
    }) as OfferDto[]

    return data
  }

  async getFaqPage(): Promise<FaqPage> {
    const res = await this._contentfulClient.getEntries({ content_type: "pageFaq" })

    const data = res.items.map((item) => {
      const questions = item.fields.questions as { fields: { question: string; answer: string }; sys: { id: string } }[]

      return {
        ...item.fields,
        id: item.sys.id,
        questions: questions.map((q) => {
          return {
            question: q.fields.question,
            answer: q.fields.answer,
            id: q.sys.id,
          }
        }),
        faqHeadline: item.fields.faqHeadline,
      }
    })[0] as FaqPage

    return data
  }

  async getContactPage(): Promise<ContactPage> {
    const res = await this._contentfulClient.getEntries({ content_type: "kontakt" })

    const data = res.items.map((item) => {
      return {
        ...item.fields,
        id: item.sys.id,
        contactHeadline: item.fields.contactHeadline,
        contractText: item.fields.contactHeadline,
      }
    })[0] as ContactPage

    return data
  }

  async getOffererPage(): Promise<OffererPage> {
    const res = await this._contentfulClient.getEntries({ content_type: "anbieterWerden" })

    const data = res.items.map((item) => {
      const image = item.fields.picture as Picture
      const bigPicture = item.fields.bigPictureLeft as Picture

      return {
        ...item.fields,
        id: item.sys.id,
        imageUrl: getImgUrlFromObj(image),
        bigPictureLeftUrl: getImgUrlFromObj(bigPicture),
      }
    })[0] as any

    return data
  }

  async getHowItWorksPage(): Promise<HowItWorksPage> {
    const res = await this._contentfulClient.getEntries({ content_type: "wieFunktionierts" })

    const data = res.items.map((item) => {
      const image = item.fields.howItWorksExplanation as Picture

      return {
        ...item.fields,
        howItWorksExplanationImageUrl: getImgUrlFromObj(image),
      }
    })[0] as HowItWorksPage

    return data
  }

  async getAboutUsPage(): Promise<AboutUsPage> {
    const res = await this._contentfulClient.getEntries({ content_type: "ueberUns" })

    const data = res.items.map((item) => {
      const celebrationOfHumanityPart = item.fields.celebrationOfHumanity as { fields: any }
      const image = item.fields.picture as Picture
      const teamSection = item.fields.teamSection as { fields: any }

      return {
        ...item.fields,
        celebrationOfHumanity: {
          ...celebrationOfHumanityPart?.fields,
          pictureUrl: getImgUrlFromObj(celebrationOfHumanityPart.fields.picture),
        },
        pictureUrl: getImgUrlFromObj(image),
        teamSection: {
          ...teamSection.fields,
        },
      }
    })[0] as AboutUsPage

    return data
  }

  async getLandingPage(): Promise<LandingPage> {
    const res = await this._contentfulClient.getEntries({ content_type: "pageLandingPage" })

    const data = res.items.map((item) => {
      const callToAction = item.fields.callToAction as {
        fields: { boxHeadline: string; boxText: string; linkText: string }
      }
      const kacheln = item.fields.kacheln as { fields: { kacheltext: string; kachelbild: Picture } }[]
      const ueberAkw = item.fields.ueberAkw as { fields: { picture: Picture } }
      const wusstestDu = item.fields.wusstestDu as { fields: { text: string; picture: Picture } }[]

      return {
        ...(item.fields as unknown as LandingPage),
        callToAction: {
          ...callToAction.fields,
        },
        kacheln: kacheln.map((kachel) => {
          return {
            kachelText: kachel.fields.kacheltext,
            kachelImgUrl: getImgUrlFromObj(kachel.fields.kachelbild),
          }
        }),
        ueberAkw: {
          ...(ueberAkw.fields as unknown as UeberAkw),
          pictureUrl: getImgUrlFromObj(ueberAkw.fields.picture),
        },
        wusstestDu: wusstestDu.map((item) => {
          return {
            ...item.fields,
            text: item.fields.text,
            pictureUrl: getImgUrlFromObj(item.fields.picture),
          }
        }),
      }
    })[0] as LandingPage

    return data
  }
}
