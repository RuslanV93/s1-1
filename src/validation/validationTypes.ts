export interface UpdateVideoRequestBody {
  title?: string
  author?: string
  availableResolutions?: string[]
  canBeDownloaded?: boolean
  minAgeRestriction?: number | null
  publicationDate?: string
}

export interface ErrorField {
  field: string
  message: string
}

export enum Resolutions {
  'P144' = 'P144',
  'P240' = 'P240',
  'P360' = 'P360',
  'P480' = 'P480',
  'P720' = 'P720',
  'P1080' = 'P1080',
  'P1440' = 'P1440',
  'P2160' = 'P2160',
}
