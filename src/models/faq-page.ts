export default interface FaqPage {
  faqHeadline: string
  questions: Question[]
}

interface Question {
  question: string
  answer: string
  id: string
}
