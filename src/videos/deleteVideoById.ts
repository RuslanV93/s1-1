import db from '../db/db'
import { Request, Response } from 'express'

export const deleteVideoById = (req: Request, res: Response) => {
  const videoId = +req.params.id
  const videoIndex = db.videos.findIndex((v) => v.id === videoId)

  if (videoIndex === -1) {
    res.status(404).json({ message: 'Video not found.' })
  }
  db.videos.filter((video) => video.id !== videoId)
  res.sendStatus(204)
}
