import { Request, Response } from 'express'
import db from '../../db/db'
import {
  authorValidation,
  availableResolutionValidator,
  titleValidation,
} from '../../validation/newVideoValidation'
import {
  CreateVideoRequestBody,
  Resolutions,
} from '../../validation/validationTypes'

export const createVideo = (
  req: Request<{}, {}, CreateVideoRequestBody>,
  res: Response,
) => {
  const errorsArray: Array<{ field: string; message: string }> = []
  const { title, author, availableResolutions } = req.body

  titleValidation(title, errorsArray)
  authorValidation(author, errorsArray)
  availableResolutionValidator(availableResolutions, errorsArray)
  if (errorsArray.length > 0) {
    res.status(400).json({ errorsMessages: [...errorsArray] })

    return
  }
  const newVideo = {
    author: author,
    availableResolutions: availableResolutions || Object.values(Resolutions),
    canBeDownloaded: false,
    createdAt: new Date().toISOString(),
    id: Date.now(),
    minAgeRestriction: null,
    publicationDate: (function () {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      return tomorrow.toISOString()
    })(),
    title: title,
  }
  db.videos = [...db.videos, newVideo]
  res.status(201).send(newVideo)
}
