export interface OfferDto {
  id: string
  description?: string
  name: string
  carddescription?: string
  organame?: string
  tags: Tag[]
  offeringTypes: Tag[]
  street?: string
  houseNumber?: string
  postcode?: string
  city?: string
  telephone?: string
  fax?: string
  mailAdress?: string
  organizationId: string
  imageUrls: string[]
  price: string
  latitude?: number | null
  longitude?: number | null
  published: boolean
  online?: boolean
  updatedAt?: string
  createdAt?: string
  duration?: string
  participants?: string
  procedure?: string
  targetGroup?: string
  additional_information?: string
  short_description?: string
}

export interface Tag {
  label: string
}
