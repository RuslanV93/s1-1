import { Request, Response } from 'express'
import db from '../db/db'
import {
  authorValidation,
  availableResolutionValidator,
  titleValidation,
} from '../validation/newVideoValidation'
import { Resolutions } from '../validation/validationTypes'

export const createVideo = (req: Request, res: Response) => {
  const errorsArray: Array<{ field: string; message: string }> = []
  const { title, author, availableResolution } = req.body

  titleValidation(title, errorsArray)
  authorValidation(author, errorsArray)
  availableResolutionValidator(availableResolution, errorsArray)
  if (errorsArray.length > 0) {
    res.status(400).json({ errorsMessages: [...errorsArray] })

    return
  }
  const newVideo = {
    id: Date.now(),
    title: title,
    author: author,
    canBeDownLoaded: true,
    minAgeRestriction: null,
    createdAt: new Date().toISOString(),
    publicationDate: new Date().toISOString(),
    availableResolution: availableResolution || Object.values(Resolutions),
  }
  db.videos = [...db.videos, newVideo]
  res.status(201).send(newVideo)
}
