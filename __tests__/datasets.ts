import { Resolutions } from '../src/validation/validationTypes'
import { DBType } from '../src/db/db'

export interface videoDBType {
  id: number
  title: string
  author: string
  canBeDownloaded: boolean
  minAgeRestriction: number | null
  createdAt: string
  publicationDate: string
  availableResolution: Resolutions[]
}

const randomId = () => {
  return Math.floor(Math.random() * 100)
}
export const video1 = (): videoDBType => {
  return {
    id: randomId(),
    title: 't' + Date.now() + Math.random(),
    author: 'a' + Date.now() + Math.random(),
    canBeDownloaded: true,
    minAgeRestriction: 2,
    createdAt: new Date().toISOString(),
    publicationDate: new Date().toISOString(),
    availableResolution: [Resolutions.P240],
  }
}

export const dataset: DBType = {
  videos: [video1(), video1(), video1()],
}
