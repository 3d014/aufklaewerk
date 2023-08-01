import { OfferDto } from "../src/models/offer-dto"

export const filterByCity = (filteredOffers: OfferDto[], filteredLocation: string | null): OfferDto[] => {
  if (filteredLocation) {
    return filteredOffers.filter((offer) => offer.city === filteredLocation)
  } else {
    return filteredOffers
  }
}

export const filterByType = (filteredOffers: OfferDto[], filteredOfferType: string | null, filteredLocation: string | null): OfferDto[] => {
  if (filteredOfferType) {
    const filteredTypesArray = filteredOfferType.split(",")
    filteredOffers = filteredOffers.filter((offer) => {
      const typeTags = offer.offeringTypes.map((type) => type.label)
      return typeTags.some((tag) => filteredTypesArray.includes(tag))
    })
  }

  return filterByCity(filteredOffers, filteredLocation)
}