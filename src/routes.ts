export const pages: PageTitle[] = [
  { text: "Uber uns", path: "/aboutUs" },
  { text: "Wie Funktioniert", path: "/searcher" },
  { text: "Anbieter Werden", path: "/offerer" },
  { text: "Kontakt", path: "/contact" },
]

export interface PageTitle {
  text: string
  path: string
}

export enum pathValues {
  aboutUs = 0,
  searcher = 1,
  offerer,
  contact,
}
