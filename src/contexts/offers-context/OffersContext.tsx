"use client"
import { OfferDto } from "@/src/models/offer-dto"
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import React from "react"

interface OffersContextValue {
  offers: OfferDto[]
}

const initialContextValue: OffersContextValue = {
  offers: [],
}

export const OffersContext = createContext<OffersContextValue>(initialContextValue)
export const useOffers = (): OffersContextValue => useContext(OffersContext)

export const OffersContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [offers, setOffers] = useState<OfferDto[]>([])

  return <OffersContext.Provider value={{ offers: offers }}>{props.children}</OffersContext.Provider>
}
