import { ErrorField, Resolutions } from './validationTypes'

export const titleValidation = (
  title: string | undefined,
  errorsArray: Array<ErrorField>,
) => {
  if (!title) {
    errorsArray.push({ field: 'title', message: 'no title' })
    return
  }
  if (typeof title !== 'string') {
    errorsArray.push({ field: 'title', message: 'title must be a string' })
    return
  }
  if (title && title.trim().length > 40) {
    errorsArray.push({
      message: 'title length must be less than 40 symbols',
      field: 'title',
    })
  }
}

export const authorValidation = (
  author: string | undefined,
  errorsArray: Array<ErrorField>,
) => {
  if (!author) {
    errorsArray.push({ field: 'author', message: 'no author' })
    return
  }
  if (typeof author !== 'string') {
    errorsArray.push({ field: 'author', message: 'author must be a string' })
    return
  }
  if (author && author.trim().length > 20) {
    errorsArray.push({
      message: 'author length must be less than 20 symbols',
      field: 'author',
    })
  }
}

export const availableResolutionValidator = (
  availableResolution: Array<string>,
  errorsArray: Array<ErrorField>,
) => {
  if (!Array.isArray(availableResolution)) {
    errorsArray.push({
      message: 'exist not valid value',
      field: 'availableResolutions',
    })
    return
  }
  if (availableResolution && availableResolution.length > 0) {
    availableResolution.forEach((res: string) => {
      if (!Object.keys(Resolutions).includes(res)) {
        errorsArray.push({
          message: 'exist not valid value',
          field: 'availableResolutions',
        })
      }
    })
  }
}
