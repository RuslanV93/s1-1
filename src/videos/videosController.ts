import { getVideos } from './handlers/getVideos'
import { getVideoById } from './handlers/getVideoById'
import { Router } from 'express'
import { createVideo } from './handlers/createVideo'
import { updateVideo } from './handlers/updateVideo'
import { deleteVideoById } from './handlers/deleteVideoById'

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
