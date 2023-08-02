'use client';
import {OfferDto} from "@/src/models/offer-dto";
import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {ContentfulService, getItems} from "@/src/contentful-client";
import React from 'react'


interface OffersContextValue {
  offers: OfferDto[]
}

const initialContextValue: OffersContextValue = {
  offers: []
}

export const OffersContext = createContext<OffersContextValue>(initialContextValue)
export const useOffers = ():OffersContextValue => useContext(OffersContext)

export const OffersContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [offers, setOffers] = useState<OfferDto[]>([])

  useEffect(() => {
    void (async () => {
      const result = await ContentfulService.getOffers()
      setOffers(result)
    })()
  },[ContentfulService])

  console.log(offers)
  return (
    <OffersContext.Provider value={{ offers: offers }}>
      {props.children}
    </OffersContext.Provider>
  )
}