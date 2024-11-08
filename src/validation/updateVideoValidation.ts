import { ErrorField, UpdateVideoRequestBody } from './validationTypes'

export const updateVideoValidation = (
  body: UpdateVideoRequestBody,
  errorsArray: Array<ErrorField>,
) => {
  if (
    body.canBeDownloaded !== undefined &&
    (typeof body.canBeDownloaded as any) !== 'boolean'
  ) {
    errorsArray.push({
      message: 'field must be boolean',
      field: 'canBeDownloaded',
    })
  }

  if (
    body.minAgeRestriction &&
    (body.minAgeRestriction < 1 || body.minAgeRestriction > 18)
  ) {
    errorsArray.push({
      message: "can't be less than 1 and more than 18",
      field: 'minAgeRestriction',
    })
  }

  if (
    body.publicationDate !== undefined &&
    (typeof body.publicationDate as any) !== 'string'
  ) {
    errorsArray.push({
      message: 'field must be a string',
      field: 'publicationDate',
    })
    return
  }
  const iso8601Pattern: RegExp =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/
  if (body.publicationDate && !iso8601Pattern.test(body.publicationDate)) {
    errorsArray.push({
      message: 'field must be a valid ISO 8601 date-time string',
      field: 'publicationDate',
    })
  }
}
