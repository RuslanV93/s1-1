import { getVideos } from './getVideos'
import { getVideoById } from './getVideoById'
import { Router } from 'express'
import { createVideo } from './createVideo'
import { updateVideo } from './updateVideo'
import { deleteVideoById } from './deleteVideoById'

export const videoRouter = Router()

export const videosController = {
  getVideos: getVideos,
  getVideoById: getVideoById,
  createVideo: createVideo,
  updateVideo: updateVideo,
  deleteVideoById: deleteVideoById,
}

videoRouter.get('/', videosController.getVideos)
videoRouter.get('/:id', videosController.getVideoById)
videoRouter.post('/', videosController.createVideo)
videoRouter.put('/:id', videosController.updateVideo)
videoRouter.delete('/:id', videosController.deleteVideoById)
