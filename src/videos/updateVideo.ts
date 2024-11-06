import { Response, Request } from 'express'
import { updateVideoValidation } from '../validation/updateVideoValidation'
import {
  authorValidation,
  availableResolutionValidator,
  titleValidation,
} from '../validation/newVideoValidation'
import db from '../db/db'

export const updateVideo = (req: Request, res: Response) => {
  const videoId = +req.params.id
  const video = db.videos.find((video) => video.id === videoId)

  const errorsArray: Array<{ field: string; message: string }> = []

  titleValidation(req.body.title, errorsArray)
  authorValidation(req.body.author, errorsArray)
  availableResolutionValidator(req.body.availableResolution, errorsArray)
  updateVideoValidation(req.body, errorsArray)

  if (!video) {
    res.status(404).json({ message: 'Video not found' })
    return
  }
  if (errorsArray.length > 0) {
    res.status(400).json({ errorsMessages: [...errorsArray] })
    return
  }

  db.videos = db.videos.map((video) => {
    if (video.id === videoId) {
      return { ...video, ...req.body }
    }
    return video
  })

  res.sendStatus(204)
}
