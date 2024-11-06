"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosController = exports.videoRouter = void 0;
const getVideos_1 = require("./getVideos");
const getVideoById_1 = require("./getVideoById");
const express_1 = require("express");
const createVideo_1 = require("./createVideo");
const updateVideo_1 = require("./updateVideo");
const deleteVideoById_1 = require("./deleteVideoById");
exports.videoRouter = (0, express_1.Router)();
exports.videosController = {
    getVideos: getVideos_1.getVideos,
    getVideoById: getVideoById_1.getVideoById,
    createVideo: createVideo_1.createVideo,
    updateVideo: updateVideo_1.updateVideo,
    deleteVideoById: deleteVideoById_1.deleteVideoById,
};
exports.videoRouter.get('/', exports.videosController.getVideos);
exports.videoRouter.get('/:id', exports.videosController.getVideoById);
exports.videoRouter.post('/', exports.videosController.createVideo);
exports.videoRouter.put('/:id', exports.videosController.updateVideo);
exports.videoRouter.delete('/:id', exports.videosController.deleteVideoById);
