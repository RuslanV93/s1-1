import { Request, Response } from 'express'
import db from '../db/db'

export const getVideoById = (req: Request, res: Response) => {
  const videos = db.videos

  if (req.params.id) {
    const videoById = videos.filter((v) => v.id === +req.params.id)
    if (!videoById) {
      res.status(404)
      return
    }
    res.status(200).json(videoById)
  }
}
