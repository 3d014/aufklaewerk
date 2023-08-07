export interface AboutUsPage {
  heroSectionHeadline: string
  heroSectionText: string
  subheadline: string
  celebrationOfHumanity: CelebrationOfHumanity
  pictureUrl: string
  simpleContactHeadline: string
  simpleContactText: string
  address: string
  teamSection: TeamSection
}

interface CelebrationOfHumanity {
  buttonText: string
  headline: string
  subheadline: string
  text: string
  pictureUrl: string
}

interface TeamSection {
  headline: string
  subheadline: string
}
