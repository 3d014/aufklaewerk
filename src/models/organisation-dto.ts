import { Image, Location } from "@/src/models/offer-dto"

export interface OrganisationDto {
  images: Image[]
  title: string
  description: string
  tags: string[]
  phone: string
  email: string
  website: string
  id?: string
  location: Location
}
