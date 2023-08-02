export interface OfferDto {
  id: string
  title: string
  description: string
  shortdescription: string
  location: Location
  online: boolean
  offline: boolean
  tags: string[]
  organisation: {
    id: string
  }
  offeringType: string[]
  targetgroup: string[]
  groupsize: string[]
  images: Image[]
  website: string
  email: string
  price: string
  phone?: string
  radius?: number
}

export interface Location {
  lon: number
  lat: number
}

export interface Image {
  url: string
}

export interface Tag {
  label: string
}
