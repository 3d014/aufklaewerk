import { Image } from "@/src/models/offer-dto"

export interface OrganisationDto {
  images: Image[]
  // name: string
  title: string
  description: string
  tags: Tag[]
  // street: string
  // houseNumber: string
  // postcode: string
  // city: string

  // telefon: string
  phone: string

  // fax: string
  // mailAdress: string
  email: string

  // imageUrl: string
  // latitude: number
  // longitude: number

  // websiteURL: string
  website: string
  id?: string
}

export interface Tag {
  label: string
}
