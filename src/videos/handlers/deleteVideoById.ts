import db from '../../db/db'
import { Request, Response } from 'express'

// @ts-ignore
export const deleteVideoById = (req: Request, res: Response) => {
  const videoId = +req.params.id
  const videoIndex = db.videos.findIndex((v) => v.id === videoId)
  console.log(videoIndex)
  if (videoIndex === -1) {
    res.sendStatus(404)
    return
  }
  db.videos = db.videos.filter((video) => video.id !== videoId)
  res.sendStatus(204)
}
