import { Resolutions } from '../validation/validationTypes'

export type DBType = {
  videos: any[]
}

const db: DBType = {
  videos: [
    {
      id: 1,
      title: 't' + Date.now() + Math.random(),
      author: 'a' + Date.now() + Math.random(),
      canBeDownloaded: true,
      minAgeRestriction: 2,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
      availableResolution: [Resolutions.P240],
    },
  ],
}

export default db
