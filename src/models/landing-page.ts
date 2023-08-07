export interface LandingPage {
  headline: string
  heroSectionHeadline: string
  subheadline: string
  callToAction: CallToAction
  kacheln: Kachel[]
  ueberAkw: UeberAkw
  wusstestDu: WusstestDu[]
}

export interface CallToAction {
  boxHeadline: string
  boxText: string
  linkText: string
}

interface Kachel {
  kachelText: string
  kachelImgUrl: string
}

export interface UeberAkw {
  buttonLink: string
  buttonText: string
  headline: string
  pictureUrl: string
  subheadline: string
  text: string
}

interface WusstestDu {
  text: string
  pictureUrl: string
}
