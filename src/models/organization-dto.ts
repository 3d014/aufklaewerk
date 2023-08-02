export interface OrganizationDto {
  imageUrls: any[]
  name: string
  description: string
  tags: Tag[]
  street: string
  houseNumber: string
  postcode: string
  city: string
  telefon: string
  fax: string
  mailAdress: string
  imageUrl: string
  latitude: number
  longitude: number
  websiteURL: string
  id: string
}

export interface Tag {
  label: string
}