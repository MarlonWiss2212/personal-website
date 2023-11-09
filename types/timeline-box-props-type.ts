import { Certificate } from "./certificate-type"

export interface TimelineBoxProps {
  certificates?: Certificate[],
  onRight: boolean
  text: string
  title: string
}